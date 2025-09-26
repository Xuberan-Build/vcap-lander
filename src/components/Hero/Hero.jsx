import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData(e.target);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formDataToSend).toString()
    }).then(() => {
      setIsSubmitted(true);
    }).catch((error) => console.log(error));
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
        ease: "easeOut"
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="hero sacred-bg">
      <div className="sacred-geometry-bg">
        <div className="flower-of-life" style={{ top: '10%', left: '10%' }}></div>
        <div className="flower-of-life" style={{ top: '60%', right: '15%' }}></div>
        <motion.div 
          className="golden-circle animate-golden-spiral"
          style={{ top: '30%', left: '80%' }}
        />
      </div>

      <div className="golden-section">
        <div className="hero-content">
          <motion.h1 
            className="consciousness-title hero-title"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="kinetic-word">Visionary</span>{' '}
            <span className="kinetic-word">Creator's</span>{' '}
            <span className="kinetic-word">Activation</span>{' '}
            <span className="kinetic-word highlight">Protocol</span>
          </motion.h1>

          <motion.p 
            className="consciousness-subtitle"
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
          >
            Reprogram Your Consciousness for Creative Life Mastery
          </motion.p>

          <motion.p 
            className="consciousness-description hero-description"
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
          >
            Discover the divine creative authority within you through 10 transformative
            presuppositions that will revolutionize how you manifest success in business and life.
            This isn't just another course—it's a consciousness activation protocol.
          </motion.p>

          <motion.div 
            className="hero-signup"
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="signup-form" data-netlify="true" name="consciousness-activation">
                <input type="hidden" name="form-name" value="consciousness-activation" />
                
                <div className="form-row">
                  <div className="form-field">
                    <input
                      type="text"
                      name="firstName"
                      className="consciousness-input"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <input
                      type="text"
                      name="lastName"
                      className="consciousness-input"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <input
                    type="email"
                    name="email"
                    className="consciousness-input email-input"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <input
                    type="tel"
                    name="phone"
                    className="consciousness-input"
                    placeholder="Phone number (optional)"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="consciousness-button signup-button animate-golden-pulse">
                  Activate Protocol
                </button>
              </form>
            ) : (
              <div className="success-message">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="success-content"
                >
                  <h3>✨ Consciousness Activation Initiated ✨</h3>
                  <p>Welcome {formData.firstName}! Check your email for the transformation journey ahead.</p>
                </motion.div>
              </div>
            )}
          </motion.div>

          <motion.div 
            className="trust-indicators"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="indicator">
              <span className="number">10</span>
              <span className="label">Core Presuppositions</span>
            </div>
            <div className="indicator">
              <span className="number">45+</span>
              <span className="label">Interactive Slides</span>
            </div>
            <div className="indicator">
              <span className="number">∞</span>
              <span className="label">Transformation Potential</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
