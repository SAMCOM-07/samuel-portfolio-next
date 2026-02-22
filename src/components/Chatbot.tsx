"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { MessageCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";


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
      console.log("Error sending message:", error);
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
    <div ref={chatbotRef} className="z-50" role="region" aria-label="AI Chat Assistant">
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsChatOpen(prev => !prev)}
        aria-label={isChatOpen ? "Close AI chat assistant" : "Open AI chat assistant"}
        aria-expanded={isChatOpen}
        aria-controls="chatbot-window"
        type="button"
        className={`fixed bottom-5 right-5 bg-purpple p-3 text-xl rounded-full shadow-[0_0_10px] shadow-purpple focus:outline-none focus:ring-2 focus:ring-white transition-colors ${!isChatOpen && 'animate-pulse'}`}
        whileHover={{ scale: 1.1 }}
      >
        <MessageCircle size={24} color="white" aria-hidden="true" />
      </motion.button>

      {/* Chat Window */}
      {isChatOpen && (

        <motion.div
          id="chatbot-window"
          role="dialog"
          aria-labelledby="chatbot-heading"
          aria-modal="false"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="z-50 fixed bottom-20 right-5 w-[20rem] bg-background rounded-2xl shadow-[0_0_5px] shadow-purpple p-4 border border-border"
        >
          <h2 id="chatbot-heading" className="text-center text-xl font-bold text-purpple">How may I help you?</h2>
          <hr className="text-border my-4" aria-hidden="true" />
          <div 
            className="scrollbar h-72 overflow-y-auto flex flex-col space-y-4"
            role="log"
            aria-live="polite"
            aria-atomic="false"
            aria-label="Chat messages"
          >
            {messages && messages.length && messages?.map((msg, i) => (
              <div key={i} className="flex flex-col" role="article" aria-label={msg.role === "user" ? "Your message" : "Assistant response"}>
                <div
                  key={i}
                  className={`p-2 rounded-lg overflow-x-clip break-words text-sm ${msg.role === "user"
                    ? "bg-purpple text-white self-end max-w-[70%]"
                    : "bg-accent self-start max-w-[85%]"
                    }`}
                >
                  <ReactMarkdown
                    components={{
                      a: ({ node, ...props }) => (
                        <a
                          {...props}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        />
                      ),
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>
                </div>
                {isLoading && msg.role === 'user' && i === (messages.length - 1) && <div className="animate-pulse flex items-center mt-4 text-muted-foreground/70" role="status" aria-live="polite">loading <span className="w-3 h-3 inline-block rounded-full ml-1 border-b-2 border-t-2 animate-spin" aria-hidden="true"></span></div>}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              id="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something . . ."
              aria-label="Type your message"
              className="flex-1 border border-border outline-0 rounded-lg px-3 py-2 text-sm focus:border-primary focus:ring-2 focus:ring-primary transition-colors"
            />
            <button
              type="submit"
              onClick={(e) => sendMessage(e)}
              aria-label="Send message"
              disabled={!input.trim() || isLoading}
              className="bg-purpple text-white px-3 py-2 rounded-lg text-sm hover:opacity-75 active:scale-85 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={16} aria-hidden="true" />
            </button>
          </form>
        </motion.div>
      )}
    </div>
  );
}
