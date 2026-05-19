import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Hi there! 👋 I'm Ayush's Virtual Assistant. How can I help you learn more about his work?",
    }
  ]);

  const quickReplies = [
    { label: "Core Skills?", query: "skills" },
    { label: "Tell me about Patents", query: "patents" },
    { label: "Top Projects?", query: "projects" },
    { label: "DSA Experience?", query: "dsa" },
    { label: "Education?", query: "education" },
    { label: "Available for hire?", query: "hire" },
    { label: "Contact info?", query: "contact" }
  ];

  const responses = {
    skills: "Ayush is a Full-Stack Software Engineer specializing in the MERN stack (MongoDB, Express, React, Node.js). He also has experience with Python, C++, Java, TensorFlow for ML, and Flutter for mobile apps!",
    patents: "He has two government-reviewed patents! 1. A Fabric-Integrated Micro-Capillary Haptic Interface (wearable tech). 2. An Intelligent Smart Automation Bag (IoT).",
    projects: "Some of his top projects include CampusBite (a comprehensive food ordering platform), MarketMind AI (a stock analysis tool), and an intelligent HelpConnect system. He loves building products that solve real problems!",
    dsa: "Ayush has solved over 300+ Data Structures and Algorithms problems across platforms like LeetCode and GeeksforGeeks, demonstrating strong problem-solving logic.",
    education: "He is currently pursuing his Master of Computer Applications (MCA) at Lovely Professional University, having previously completed his BCA at GLA College.",
    hire: "Yes! Ayush is actively looking for Software Development Engineer (SDE) roles, Frontend/Full-Stack Developer positions, and Graduate Internships. He is open to remote and on-site opportunities.",
    contact: "You can email him directly at ayushvishwakarmadto29@gmail.com, or connect with him on LinkedIn using the links in the footer or Contact section!"
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleQuickReply = (reply) => {
    // Add user message
    const userMsg = { id: Date.now(), sender: 'user', text: reply.label };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // Simulate AI typing delay
    setTimeout(() => {
      const aiMsg = { id: Date.now() + 1, sender: 'ai', text: responses[reply.query] };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        className={`chatbot-fab ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageSquare size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window glass-panel"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="chatbot-header-info">
                <div className="chatbot-avatar">
                  <Bot size={20} />
                  <span className="online-indicator"></span>
                </div>
                <div>
                  <h3 className="chatbot-title">Ayush AI</h3>
                  <p className="chatbot-status">Virtual Assistant</p>
                </div>
              </div>
              <button className="chatbot-close" onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="chatbot-messages">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  className={`message-wrapper ${msg.sender}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {msg.sender === 'ai' && <div className="message-icon ai"><Bot size={14} /></div>}
                  <div className={`message-bubble ${msg.sender}`}>
                    {msg.text}
                  </div>
                  {msg.sender === 'user' && <div className="message-icon user"><User size={14} /></div>}
                </motion.div>
              ))}

              {isTyping && (
                <div className="message-wrapper ai">
                  <div className="message-icon ai"><Bot size={14} /></div>
                  <div className="message-bubble ai typing">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies / Input Area */}
            <div className="chatbot-input-area">
              <p className="quick-replies-title">Ask me anything:</p>
              <div className="quick-replies-grid">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    className="quick-reply-btn"
                    onClick={() => handleQuickReply(reply)}
                    disabled={isTyping}
                  >
                    {reply.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
