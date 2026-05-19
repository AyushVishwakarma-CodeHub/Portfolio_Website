import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitCommit, Folder, GitPullRequest, Award } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './GithubStats.css';

const GithubStats = () => {
  // Generate mock contribution calendar data for 24 weeks (168 days)
  const [contributions, setContributions] = useState([]);
  
  useEffect(() => {
    const levels = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2];
    const data = [];
    const today = new Date();
    
    for (let i = 167; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      
      // Random level but biased to create patterns
      let level = levels[Math.floor(Math.random() * levels.length)];
      // Weekends have fewer contributions
      if (date.getDay() === 0 || date.getDay() === 6) {
        level = Math.random() > 0.9 ? 1 : 0;
      }
      
      const count = level === 0 ? 0 : level === 1 ? Math.floor(Math.random() * 2) + 1 : level === 2 ? Math.floor(Math.random() * 3) + 3 : level === 3 ? Math.floor(Math.random() * 4) + 6 : Math.floor(Math.random() * 5) + 10;
      
      data.push({
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        level,
        count
      });
    }
    setContributions(data);
  }, []);

  const stats = [
    { label: "Total Contributions", value: "50+", icon: <GitCommit size={20} /> },
    { label: "Active Repositories", value: "15+", icon: <Folder size={20} /> },
    { label: "Pull Requests", value: "5+ Merged", icon: <GitPullRequest size={20} /> }
  ];

  return (
    <section id="github-stats" className="github-section">
      <div className="container">
        <h2 className="section-title">
          GitHub & Coding <span className="text-gradient">Activity</span>
        </h2>
        <p className="section-subtitle">
          An interactive overview of my code contributions, open-source work, and competitive programming statistics.
        </p>

        <div className="github-grid">
          {/* Left Column: Stats & LeetCode */}
          <div className="left-stats-column">
            <div className="stats-cards-grid">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-card glass-panel"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="stat-card-icon">{stat.icon}</div>
                  <div className="stat-card-info">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* LeetCode Profile Dashboard */}
            <motion.a
              href="https://leetcode.com/u/AYUSH_VISHWAKARMA_/"
              target="_blank"
              rel="noopener noreferrer"
              className="leetcode-card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="leetcode-header">
                <div className="leetcode-title">
                  <Award className="leetcode-logo-icon" size={20} />
                  <span>LeetCode Stats</span>
                </div>
                <span className="view-profile-badge">Visit Profile ↗</span>
              </div>

              <div className="leetcode-body">
                {/* Left side: Circular Progress */}
                <div className="leetcode-circle-progress">
                  <svg width="80" height="80">
                    <circle
                      className="leetcode-circle-bg"
                      stroke="rgba(255, 255, 255, 0.05)"
                      strokeWidth="6"
                      fill="transparent"
                      r="32"
                      cx="40"
                      cy="40"
                    />
                    <circle
                      className="leetcode-circle-indicator"
                      stroke="#ffc01e"
                      strokeWidth="6"
                      strokeDasharray={2 * Math.PI * 32}
                      strokeDashoffset={2 * Math.PI * 32 * (1 - 150 / 300)} // 150 out of 300 solved
                      strokeLinecap="round"
                      fill="transparent"
                      r="32"
                      cx="40"
                      cy="40"
                      transform="rotate(-90 40 40)"
                    />
                  </svg>
                  <div className="leetcode-circle-text">
                    <span className="leetcode-solved-num">150+</span>
                    <span className="leetcode-solved-lbl">Solved</span>
                  </div>
                </div>

                {/* Right side: Detailed Bars */}
                <div className="leetcode-bars">
                  <div className="leetcode-bar-item">
                    <div className="bar-info">
                      <span className="bar-label easy">Easy</span>
                      <span className="bar-count">65/120</span>
                    </div>
                    <div className="bar-track">
                      <div className="bar-fill easy" style={{ width: '54%' }}></div>
                    </div>
                  </div>

                  <div className="leetcode-bar-item">
                    <div className="bar-info">
                      <span className="bar-label medium">Medium</span>
                      <span className="bar-count">75/150</span>
                    </div>
                    <div className="bar-track">
                      <div className="bar-fill medium" style={{ width: '50%' }}></div>
                    </div>
                  </div>

                  <div className="leetcode-bar-item">
                    <div className="bar-info">
                      <span className="bar-label hard">Hard</span>
                      <span className="bar-count">10/30</span>
                    </div>
                    <div className="bar-track">
                      <div className="bar-fill hard" style={{ width: '33%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          </div>

          {/* Right: Contribution Calendar Board */}
          <motion.div 
            className="calendar-board glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="calendar-header">
              <div className="calendar-title">
                <FaGithub size={18} />
                <span>AyushVishwakarma-CodeHub Contributions</span>
              </div>
              <a 
                href="https://github.com/AyushVishwakarma-CodeHub" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="view-github-link"
              >
                View Profile
              </a>
            </div>

            <div className="calendar-grid-wrapper">
              <div className="calendar-grid">
                {contributions.map((day, idx) => (
                  <div 
                    key={idx}
                    className={`calendar-cell level-${day.level}`}
                    data-tooltip={`${day.count} contributions on ${day.date}`}
                  />
                ))}
              </div>
            </div>

            <div className="calendar-footer">
              <span className="footer-note">Hover over cells to see activity</span>
              <div className="calendar-legend">
                <span>Less</span>
                <div className="legend-cell level-0" />
                <div className="legend-cell level-1" />
                <div className="legend-cell level-2" />
                <div className="legend-cell level-3" />
                <div className="legend-cell level-4" />
                <span>More</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
