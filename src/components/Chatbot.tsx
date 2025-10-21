"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: string; text: string }[]>([{ role: 'bot', text: `Hi 👋 I'm Sam's AI assistant! Ask me anything about him.` }]);
    const [input, setInput] = useState("");

    const sendMessage = async (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault();

        if (!input.trim()) return;

        const newMessage = { role: "user", text: input };
        setMessages([...messages, newMessage]);
        setInput("");

        const res = await fetch("/api/chatbot", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: input }),
        });

        const data = await res.json();
        setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    };

    return (
        <>
            {/* Chat Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-5 right-5 bg-purpple p-4 rounded-full shadow-lg"
                whileHover={{ scale: 1.1 }}
            >
                💬
            </motion.button>

            {/* Chat Window */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed bottom-20 right-5 w-sm bg-background rounded-2xl shadow-[0_0_5px] shadow-purpple p-4 border border-border"
                >
                    <h1 className="text-center">How may I help you?</h1>
                    <hr className="text-border my-4" />
                    <div className="h-64 overflow-y-auto flex flex-col space-y-4">
                        {messages && messages.length && messages?.map((msg, i) => (
                            <div
                                key={i}
                                className={`p-2 rounded-lg text-sm ${msg.role === "user"
                                    ? "bg-purpple text-white self-end text-right max-w-[85%]"
                                    : "bg-accent self-start text-left max-w-[85%]"
                                    }`}
                            >
                                {msg && msg.text && msg.text}
                            </div>
                        ))}
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
        </>
    );
}
