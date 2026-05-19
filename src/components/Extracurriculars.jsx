import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Star } from 'lucide-react';
import './Extracurriculars.css';

const Extracurriculars = () => {
  const activities = [
    {
      title: "Theatre Production Actor",
      organization: "Sur Tal Rangmanch, LPU",
      period: "Oct 2025",
      image: "/theatre_production.png",
      desc: "Performed in a compelling theatre production, demonstrating strong public speaking, emotional range, and the ability to captivate live audiences.",
      icon: <Star size={20} />
    },
    {
      title: "Modeling & Presentation",
      organization: "Lovely Professional University",
      period: "Oct 2025",
      video: "/modeling-video.mp4",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
      desc: "Demonstrated confidence, poise, and strong presentation skills through various modeling activities and stage walks.",
      icon: <Star size={20} />
    }
  ];

  return (
    <section id="extracurriculars" className="extra-section">
      <div className="container">
        <h2 className="section-title">
          Extracurricular <span className="text-gradient">Activities</span>
        </h2>
        <p className="section-subtitle">
          Beyond the code: Creativity, confidence, and stage presence.
        </p>

        <div className="extra-grid">
          {activities.map((activity, index) => (
            <motion.div 
              key={index}
              className="extra-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="extra-image-container">
                {activity.video ? (
                  <video 
                    src={activity.video} 
                    className="extra-image"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  />
                ) : (
                  <img src={activity.image} alt={activity.title} className="extra-image" />
                )}
                <div className="extra-overlay"></div>
                <div className="extra-icon-badge">
                  {activity.icon}
                </div>
              </div>
              
              <div className="extra-content">
                <h3 className="extra-title">{activity.title}</h3>
                <h4 className="extra-org">{activity.organization}</h4>
                
                <div className="extra-meta">
                  <span className="extra-meta-item">
                    <Calendar size={14} /> {activity.period}
                  </span>
                </div>
                
                <p className="extra-desc">{activity.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurriculars;
