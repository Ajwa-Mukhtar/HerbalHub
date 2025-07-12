import React, { useState, useEffect } from "react";
import { faq } from "./faqdata";
import { GiHerbsBundle } from "react-icons/gi";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [currentChatIndex, setCurrentChatIndex] = useState(null);
  const [input, setInput] = useState("");

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startNewChat = () => {
    const welcomeMessage = { sender: "bot", text: "Can I help you with anything?" };
    setConversations([...conversations, [welcomeMessage]]);
    setCurrentChatIndex(conversations.length);
  };

  const toggleChat = () => {
    if (!isOpen) {
      startNewChat();
    }
    setIsOpen(!isOpen);
  };

  const getAnswer = (question) => {
    const match = faq.find(f => f.question.toLowerCase() === question.toLowerCase());
    return match ? match.answer : "Sorry, I have no information about this.";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    const botMessage = { sender: "bot", text: getAnswer(input) };

    const updatedConvo = [...conversations[currentChatIndex], userMessage, botMessage];
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
      {/* Chatbot FAB */}
      <div
        className="z-50 group"
        style={{
          position: "fixed",
          bottom: isMobile ? "70px" : "20px",
          right: isMobile ? "16px" : "20px",
        }}
      >
        <button
          onClick={toggleChat}
          className="bg-green-700 text-white p-4 rounded-full shadow-lg hover:bg-green-800 relative"
        >
          <GiHerbsBundle size={isMobile ? 30 : 40} />
          <span className="absolute -left-36 top-1/2 transform -translate-y-1/2 bg-white text-green-700 text-sm px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Ask about herbs 🌿
          </span>
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="bg-white border rounded-lg shadow-lg z-50 flex flex-col"
          style={{
            position: "fixed",
            bottom: isMobile ? "120px" : "80px",
            right: isMobile ? "10px" : "20px",
            width: isMobile ? "90vw" : "350px",
            height: isMobile ? "70vh" : "450px",
          }}
        >
          {/* Header */}
          <div className="bg-green-700 text-white p-3 rounded-t-lg font-semibold flex justify-between items-center">
            <span>Herbal Chatbot - Chat {currentChatIndex + 1}</span>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-300 text-xl leading-none"
            >
              &times;
            </button>
          </div>

          {/* Tabs */}
          <div className="flex overflow-x-auto p-2 space-x-2 bg-gray-100 text-xs">
            {conversations.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentChatIndex(idx)}
                className={`px-2 py-1 rounded ${
                  idx === currentChatIndex ? "bg-green-600 text-white" : "bg-white border"
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
