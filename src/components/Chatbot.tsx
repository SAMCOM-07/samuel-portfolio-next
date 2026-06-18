"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User } from "lucide-react";
import { MessageCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { FaSpinner } from "react-icons/fa";


export default function ChatBot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([{ role: 'bot', text: `Hi 👋 I'm Sam's AI assistant! Ask me anything about him.` }]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatbotRef = useRef<HTMLDivElement>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  //   send message function
  const sendMessage = async (e: React.MouseEvent<HTMLButtonElement>) => {

    e.preventDefault();

    if (!input.trim()) return;
    const newMessage = { role: "user", text: input };
    setMessages([...messages, newMessage]);
    setInput("");

    try {
      setIsLoading(true);
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);

    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        chatbotRef.current &&
        !chatbotRef.current.contains(event.target as Node)
      ) {
        setIsChatOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <div ref={chatbotRef} className="z-50">
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsChatOpen(prev => !prev)}
        className={`fixed bottom-5 right-5 bg-purpple p-3 text-xl rounded-full shadow-[0_0_10px] shadow-purpple ${!isChatOpen && 'animate-pulse'}`}
        whileHover={{ scale: 1.1 }}
      >
        <MessageCircle size={24} color="white" aria-label="Open chat with AI assistant" />
      </motion.button>

      {/* Chat Window */}
      {isChatOpen && (

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="z-50 fixed bottom-20 right-5 w-[22rem] bg-gradient-to-br from-background/95 to-background/80 rounded-3xl shadow-2xl shadow-purpple/30 p-5 border border-foreground/10 backdrop-blur-xl"
        >
          <h2 className="text-center text-lg font-bold bg-gradient-to-r from-purpple to-accent bg-clip-text text-transparent">How may I help you?</h2>
          <div className="h-px bg-gradient-to-r from-transparent via-purpple/30 to-transparent my-4" />
          <div className="scrollbar h-72 overflow-y-auto overflow-x-hidden flex flex-col space-y-4">
            {messages && messages.length && messages?.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}

              >
                <div className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>


                  {/* Bot Icon */}
                  {msg.role === "bot" && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent to-purpple/60 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot size={16} className="text-white/70" />
                    </div>
                  )}

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[70%] px-4 py-3 rounded-2xl text-xs font-light leading-relaxed break-words backdrop-blur-md transition-all duration-300 ${msg.role === "user"
                      ? "bg-gradient-to-br from-purpple/40 to-purpple/20 border border-purpple/30 text-foreground rounded-br-none shadow-lg shadow-purpple/20 hover:shadow-xl hover:shadow-purpple/30"
                      : "bg-gradient-to-br from-white/10 via-accent/5 to-white/5 border border-white/20 text-foreground rounded-bl-none shadow-lg shadow-accent/10 hover:shadow-xl hover:shadow-accent/20 hover:border-white/30"
                      }`}
                  >
                    <ReactMarkdown
                      components={{
                        a: ({ node, ...props }) => (
                          <a
                            {...props}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purpple hover:text-purpple/80 hover:underline font-semibold transition-colors"
                          />
                        ),
                        p: ({ node, ...props }) => (
                          <p {...props} className="mb-2 last:mb-0" />
                        ),
                        ul: ({ node, ...props }) => (
                          <ul {...props} className="list-disc list-inside space-y-1 mb-2" />
                        ),
                        ol: ({ node, ...props }) => (
                          <ol {...props} className="list-decimal list-inside space-y-1 mb-2" />
                        ),
                        li: ({ node, ...props }) => (
                          <li {...props} className="mb-1" />
                        ),
                        code: ({ node, ...props }) => (
                          <code {...props} className="bg-black/20 px-1.5 py-0.5 rounded text-xs font-mono" />
                        ),
                      }}
                    >
                      {msg.text}
                    </ReactMarkdown>
                  </div>

                  {/* User Icon */}
                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purpple to-purpple/60 flex items-center justify-center flex-shrink-0 mt-1">
                      <User size={16} className="text-white" />
                    </div>
                  )}
                </div>

                {/* Loading Indicator */}
                {isLoading && msg.role === "user" && i === (messages.length - 1) && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-1 text-muted-foreground/70 text-xs mt-4 ml-2"
                  >
                    <span>thinking</span>
                    <FaSpinner className="animate-spin" size={12} />
                  </motion.div>
                )}
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form className="mt-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something . . ."
              className="flex-1 border border-border outline-0 rounded-lg px-3 py-2 text-sm"
            />
            <button
              aria-label="send message"
              onClick={(e) => sendMessage(e)}
              className="bg-purpple text-white px-3 py-2 rounded-lg text-sm hover:opacity-75 active:scale-85 transition-all duration-300"
            >
              <Send size={16} />
            </button>
          </form>
        </motion.div>
      )}
    </div>
  );
}
