import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    purpose: 'Job Opportunity (Full-time / Internship)',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Native HTML form submission used instead of AJAX to bypass CORS issues on localhost

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or looking to hire? I'd love to chat.
          </p>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-card glass-panel">
                <div className="info-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:ayushvishwakarmadto29@gmail.com">ayushvishwakarmadto29@gmail.com</a>
                </div>
              </div>
              <div className="info-card glass-panel">
                <div className="info-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+918340489386">+91 8340489386</a>
                </div>
              </div>
              <div className="info-card glass-panel">
                <div className="info-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Daltonganj, Jharkhand 822102</p>
                </div>
              </div>
            </div>

            <div className="contact-form-container glass-panel">
              <form 
                action="https://api.web3forms.com/submit" 
                method="POST" 
                className="contact-form"
              >
                <input type="hidden" name="access_key" value="89e629ad-0fed-4ea5-84d4-d3c7c4d12c16" />
                <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="form-input"
                    placeholder="Full Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="form-input"
                    placeholder="email@gmail.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company / Organization (Optional)</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g. Google, Startup Inc."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="purpose">Purpose of Inquiry</label>
                  <select 
                    id="purpose" 
                    name="purpose" 
                    value={formData.purpose}
                    onChange={handleChange}
                    className="form-input form-select"
                    required
                  >
                    <option value="Job Opportunity (Full-time / Internship)">Job Opportunity (Full-time / Internship)</option>
                    <option value="Freelance Project">Freelance Project</option>
                    <option value="Networking / Mentorship">Networking / Mentorship</option>
                    <option value="Just saying Hi!">Just saying Hi!</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    className="form-input form-textarea"
                    placeholder="Tell me about your project..."
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary submit-btn">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Ayush Raj. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
