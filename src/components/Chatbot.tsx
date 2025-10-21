"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { MessageCircle } from "lucide-react";


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
        <div ref={chatbotRef}>
            {/* Chat Button */}
            <motion.button
                onClick={() => setIsChatOpen(prev => !prev)}
                className="fixed bottom-5 right-5 bg-purpple p-3 text-xl rounded-full shadow-lg"
                whileHover={{ scale: 1.1 }}
            >
                <MessageCircle size={24} color="white" aria-label="Open chat with AI assistant" />
            </motion.button>

            {/* Chat Window */}
            {isChatOpen && (

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed bottom-20 right-5 w-[20rem] bg-background rounded-2xl shadow-[0_0_5px] shadow-purpple p-4 border border-border"
                >
                    <h2 className="text-center text-xl font-bold text-purpple">How may I help you?</h2>
                    <hr className="text-border my-4" />
                    <div className="scrollbar h-64 overflow-y-auto flex flex-col space-y-4">
                        {messages && messages.length && messages?.map((msg, i) => (
                            <div key={i} className="flex flex-col">
                                <div
                                    key={i}
                                    className={`p-2 rounded-lg overflow-x-clip break-words text-sm ${msg.role === "user"
                                        ? "bg-purpple text-white self-end max-w-[70%]"
                                        : "bg-accent self-start max-w-[85%]"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                                {isLoading && msg.role === 'user' && i === (messages.length - 1) && <div className="animate-pulse flex items-center">loading <span className="w-3 h-3 inline-block rounded-full ml-1 border-b-2 border-t-2 animate-spin"></span></div>}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <form className="mt-3 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask something..."
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
