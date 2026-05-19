import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TermIcon, Play } from 'lucide-react';
import './Terminal.css';

const Terminal = () => {
  const [history, setHistory] = useState([
    { text: "Welcome to Ayush Raj's Interactive Bio Terminal [v1.0.0]", type: "system" },
    { text: "Type 'help' to see the list of available commands.", type: "system" },
    { text: "", type: "break" }
  ]);
  const [input, setInput] = useState("");
  const historyContainerRef = useRef(null);

  const commands = {
    help: () => [
      "Available commands:",
      "  about    - Brief introduction about me",
      "  skills   - My primary tech stack",
      "  patents  - Details about my government-reviewed patents",
      "  contact  - My social links and email",
      "  clear    - Clear the terminal screen"
    ],
    about: () => [
      "Ayush Raj - MCA Student & Software Engineer",
      "------------------------------------------",
      "I am currently pursuing my MCA at Lovely Professional University (LPU).",
      "I love solving real-world challenges through full-stack web engineering,",
      "mobile applications, and innovative hardware-software IoT systems."
    ],
    skills: () => [
      "Core Technologies:",
      "  Languages  : JavaScript, Java, PHP, Python, C++, SQL",
      "  Frameworks : React, Node.js, Express, Flutter, Spring Boot",
      "  Databases  : MongoDB, PostgreSQL, MySQL, Supabase",
      "  Tools      : Git, GitHub, Postman, Linux, Vercel"
    ],
    patents: () => [
      "Registered Patents (Under Gov. Review):",
      "  1. Fabric-Integrated Micro-Capillary Haptic Interface",
      "     - Innovative wearable tech making smart fabrics tactile.",
      "  2. Intelligent Smart Automation Bag",
      "     - IoT automation system inside travel gears."
    ],
    contact: () => [
      "Let's Connect:",
      "  Email    : ayushvishwakarmadto29@gmail.com",
      "  LinkedIn : linkedin.com/in/ayushraj2908",
      "  GitHub   : github.com/AyushVishwakarma-CodeHub",
      "  LeetCode : leetcode.com/u/AYUSH_VISHWAKARMA_/"
    ]
  };

  const handleCommand = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim().toLowerCase();
    
    if (!trimmedInput) return;

    const newHistory = [...history, { text: `ayushraj@bio:~$ ${input}`, type: "input" }];

    if (trimmedInput === 'clear') {
      setHistory([]);
    } else if (commands[trimmedInput]) {
      const output = commands[trimmedInput]();
      output.forEach(line => {
        newHistory.push({ text: line, type: "output" });
      });
    } else {
      newHistory.push({ text: `bash: command not found: ${input}. Type 'help' for assistance.`, type: "error" });
    }

    setHistory(newHistory);
    setInput("");
  };

  useEffect(() => {
    if (historyContainerRef.current) {
      historyContainerRef.current.scrollTop = historyContainerRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="terminal-container glass-panel">
      {/* Terminal Window Header */}
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="term-btn close"></span>
          <span className="term-btn minimize"></span>
          <span className="term-btn maximize"></span>
        </div>
        <div className="terminal-title">
          <TermIcon size={14} />
          <span>ayushraj@terminal: ~</span>
        </div>
        <div className="terminal-spacer"></div>
      </div>

      {/* Terminal Window Body */}
      <div className="terminal-body">
        <div className="terminal-history" ref={historyContainerRef}>
          {history.map((line, index) => (
            <div key={index} className={`terminal-line ${line.type}`}>
              {line.text}
            </div>
          ))}
        </div>

        {/* Input prompt */}
        <form onSubmit={handleCommand} className="terminal-prompt">
          <span className="prompt-label desktop-prompt">ayushraj@bio:~$</span>
          <span className="prompt-label mobile-prompt">ayush@bio:~$</span>
          <input
            type="text"
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command..."
            autoComplete="off"
            autoFocus
          />
          <button type="submit" className="terminal-submit-btn">
            <Play size={12} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Terminal;
