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
    const welcome = { sender: "bot", text: "Can I help you with anything?" };
    setConversations([...conversations, [welcome]]);
    setCurrentChatIndex(conversations.length);
  };

  const toggleChat = () => {
    if (!isOpen) startNewChat();
    setIsOpen(!isOpen);
  };

  const getAnswer = (q) => {
    const match = faq.find(f => f.question.toLowerCase() === q.toLowerCase());
    return match ? match.answer : "Sorry, I have no information about this.";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    const botMsg = { sender: "bot", text: getAnswer(input) };

    const updated = [...conversations[currentChatIndex], userMsg, botMsg];
    const all = [...conversations];
    all[currentChatIndex] = updated;
    setConversations(all);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-4 sm:bottom-6 sm:right-6 z-50">
        <button
          onClick={toggleChat}
          className="bg-green-700 text-white p-4 rounded-full shadow-lg hover:bg-green-800 relative group"
        >
          <GiHerbsBundle size={isMobile ? 30 : 40} />
          <span className="absolute -left-36 top-1/2 transform -translate-y-1/2 bg-white text-green-700 text-sm px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Ask about herbs 🌿
          </span>
        </button>
      </div>

      {/* Chat Box */}
      {isOpen && (
        <div
          className={`fixed z-[999] flex flex-col overflow-hidden border rounded-lg shadow-lg bg-white ${
            isMobile
              ? "bottom-[80px] right-2 w-[92vw] h-[75vh]"
              : "bottom-[90px] right-6 w-[350px] h-[450px]"
          }`}
        >
          <div className="bg-green-700 text-white p-3 rounded-t-lg font-semibold flex justify-between items-center text-sm">
            <span>Herbal Chatbot - Chat {currentChatIndex + 1}</span>
            <button onClick={toggleChat} className="text-white hover:text-gray-300 text-xl">
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
                className={`p-2 rounded-md max-w-[75%] break-words ${
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
