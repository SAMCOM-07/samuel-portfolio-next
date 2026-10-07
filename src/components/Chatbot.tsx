'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, MessageCircle, X, Sparkles, RotateCcw } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { FaSpinner } from 'react-icons/fa';

interface Message {
  role: 'bot' | 'user';
  text: string;
}

const quickPrompts = [
  "What is Samuel's tech stack?",
  "Tell me about Samuel's experience at Hoste",
  "Show me featured projects like Omnishop",
  "How can I contact or hire Samuel?",
];

export default function ChatBot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: "Hi there! 👋 I'm Samuel's portfolio assistant. Feel free to ask about his **software engineering experience at Hoste**, **core stack (Next.js, TypeScript, PostgreSQL)**, or **featured projects**!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatbotRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async (textToSend: string) => {
    const userText = textToSend.trim();
    if (!userText || isLoading) return;

    const newMessage: Message = { role: 'user', text: userText };
    setMessages((prev) => [...prev, newMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: data.reply || "Thanks for your question! Feel free to reach out via the Contact page or email.",
        },
      ]);
    } catch (err) {
      console.error('Chat error:', err);
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: "I'm having a brief connection hiccup. You can email Samuel directly at [shondesamuel07@gmail.com](mailto:shondesamuel07@gmail.com) or check out the [Contact page](/contact)!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input);
  };

  const handleReset = () => {
    setMessages([
      {
        role: 'bot',
        text: "Conversation reset. What would you like to explore about Samuel's engineering craft, projects, or background?",
      },
    ]);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        chatbotRef.current &&
        !chatbotRef.current.contains(event.target as Node)
      ) {
        // Optional: comment out if users want chat to persist while clicking around
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={chatbotRef} className="z-50 relative">
      {/* Floating Chat Launcher Button */}
      <motion.button
        type="button"
        onClick={() => setIsChatOpen((prev) => !prev)}
        aria-label={isChatOpen ? 'Close chat assistant' : 'Open AI assistant'}
        className={`fixed bottom-20 md:bottom-6 right-5 md:right-6 w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white shadow-xl shadow-purple-900/40 flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200 z-50 ${
          !isChatOpen ? 'badge-glow' : ''
        }`}
        whileHover={{ scale: 1.08 }}
      >
        {isChatOpen ? <X size={20} /> : <MessageCircle size={22} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-36 md:bottom-22 right-4 sm:right-6 w-[92vw] sm:w-[400px] max-h-[560px] h-[78vh] flex flex-col rounded-3xl bg-card border border-border shadow-2xl backdrop-blur-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-border/60 bg-secondary/50 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center border border-purple-500/30 shadow-xs">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground">Samuel&#39;s AI Assistant</h3>
                  <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online · Next.js / Knowledge Engine
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleReset}
                  title="Reset conversation"
                  className="w-7 h-7 rounded-lg hover:bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <RotateCcw size={13} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsChatOpen(false)}
                  aria-label="Close chat window"
                  className="w-7 h-7 rounded-lg hover:bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 scrollbar text-xs sm:text-sm">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2.5 ${
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.role === 'bot' && (
                    <div className="w-6 h-6 rounded-lg bg-purple-500/15 text-purple-400 flex items-center justify-center shrink-0 mt-0.5 border border-purple-500/30">
                      <Bot size={13} />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl leading-relaxed text-xs sm:text-sm ${
                      msg.role === 'user'
                        ? 'bg-purple-600 text-white font-medium rounded-br-none shadow-xs'
                        : 'bg-secondary/70 border border-border/60 text-foreground rounded-bl-none prose dark:prose-invert max-w-none'
                    }`}
                  >
                    <ReactMarkdown
                      components={{
                        a: ({ ...props }) => (
                          <a
                            {...props}
                            className="text-purple-400 font-semibold hover:underline"
                          />
                        ),
                        p: ({ ...props }) => <p {...props} className="mb-1.5 last:mb-0" />,
                        ul: ({ ...props }) => (
                          <ul {...props} className="list-disc list-inside space-y-1 my-1" />
                        ),
                        ol: ({ ...props }) => (
                          <ol {...props} className="list-decimal list-inside space-y-1 my-1" />
                        ),
                        h3: ({ ...props }) => (
                          <h3 {...props} className="font-bold text-xs sm:text-sm text-foreground mt-2 mb-1" />
                        ),
                      }}
                    >
                      {msg.text}
                    </ReactMarkdown>
                  </div>

                  {msg.role === 'user' && (
                    <div className="w-6 h-6 rounded-lg bg-foreground text-background flex items-center justify-center shrink-0 mt-0.5">
                      <User size={13} />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex items-center gap-2 text-xs text-muted-foreground ml-8">
                  <FaSpinner className="animate-spin text-purple-400" size={13} />
                  <span>Formulating answer...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Suggestions */}
            {messages.length <= 2 && (
              <div className="px-3 py-2 bg-secondary/30 border-t border-border/40 flex items-center gap-1.5 overflow-x-auto scrollbar text-[11px]">
                <span className="text-muted-foreground text-[10px] font-mono shrink-0">Ask:</span>
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => handleSend(prompt)}
                    className="px-2.5 py-1 rounded-full bg-secondary/80 hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-500/40 text-muted-foreground border border-border/50 transition-colors whitespace-nowrap active:scale-95 shrink-0"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Input Bar */}
            <form
              onSubmit={handleSubmit}
              className="p-3 border-t border-border/60 bg-secondary/40 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about tech stack, Hoste, projects..."
                className="flex-1 px-3.5 py-2 rounded-xl bg-card border border-border text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                aria-label="Send message"
                className="p-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white shadow-xs disabled:opacity-50 transition-all active:scale-95"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
