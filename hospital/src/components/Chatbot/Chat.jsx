import React, { useState, useEffect } from "react";
import { faq } from "./faqdata";
import { GiHerbsBundle } from "react-icons/gi"; // Changed icon

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [conversations, setConversations] = useState([]); // All sessions
  const [currentChatIndex, setCurrentChatIndex] = useState(null); // Active session
  const [input, setInput] = useState("");

  const startNewChat = () => {
    const welcomeMessage = { sender: "bot", text: "Can I help you with anything?" };
    setConversations([...conversations, [welcomeMessage]]);
    setCurrentChatIndex(conversations.length); // index of new session
  };

  const toggleChat = () => {
    if (!isOpen) {
      startNewChat(); // Only start new tab when opening
    }
    setIsOpen(!isOpen);
  };

  const getAnswer = (question) => {
    const match = faq.find(
      (f) => f.question.toLowerCase() === question.toLowerCase()
    );
    return match ? match.answer : "Sorry, I have no information about this.";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    const botMessage = { sender: "bot", text: getAnswer(input) };

    const updatedConvo = [
      ...conversations[currentChatIndex],
      userMessage,
      botMessage,
    ];

    const allConvos = [...conversations];
    allConvos[currentChatIndex] = updatedConvo;
    setConversations(allConvos);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      {/* Chat Icon with Tooltip */}
      <div className="fixed bottom-5 right-5 z-50 group">
        <button
          onClick={toggleChat}
          className="bg-green-700 text-white p-4 rounded-full shadow-lg shadow-white hover:bg-green-800 relative"
        >
          <GiHerbsBundle size={40} /> {/* Herbal-themed icon */}
          <span className="absolute -left-36 top-1/2 transform -translate-y-1/2 bg-white text-green-700 text-sm px-3 py-1 rounded shadow-md shadow-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Ask about herbs 🌿
          </span>
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-[350px] h-[450px] bg-white border rounded-lg shadow-lg z-50 flex flex-col">
          {/* Header */}
          <div className="relative bg-green-700 text-white p-3 rounded-t-lg font-semibold flex justify-between items-center">
            <span>Herbal Chatbot - Chat {currentChatIndex + 1}</span>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-300 text-xl leading-none"
            >
              &times;
            </button>
          </div>

          {/* Chat Sessions Tabs */}
          <div className="flex overflow-x-auto p-2 space-x-2 bg-gray-100 text-xs">
            {conversations.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentChatIndex(idx)}
                className={`px-2 py-1 rounded ${
                  idx === currentChatIndex
                    ? "bg-green-600 text-white"
                    : "bg-white border"
                }`}
              >
                Chat {idx + 1}
              </button>
            ))}
          </div>

          {/* Messages */}
          <div className="p-3 flex-1 overflow-y-auto space-y-2 text-sm">
            {conversations[currentChatIndex]?.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md max-w-[75%] ${
                  msg.sender === "user"
                    ? "bg-gray-200 self-end ml-auto"
                    : "bg-green-100 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex border-t p-2">
            <input
              type="text"
              placeholder="Ask your questions"
              className="flex-grow border rounded-l px-3 py-2 text-sm focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={handleSend}
              className="bg-green-600 text-white px-4 rounded-r hover:bg-green-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
