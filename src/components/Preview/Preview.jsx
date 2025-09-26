import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preview.css';

const Preview = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleModalSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).then(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setShowModal(false);
        setIsSubmitted(false);
        setEmail('');
        setPhone('');
      }, 3000);
    }).catch((error) => console.log(error));
  };

  const modules = [
    {
      number: "01",
      title: "The Inner Operating System",
      subtitle: "Reprogramming Consciousness for Creative Life Mastery",
      description: "Transform the foundational beliefs that create your reality. Master the 10 core presuppositions and embody your highest values with unshakeable certainty.",
      highlights: [
        "10 Core Presupposition Shifts",
        "Self-Concept Model Integration", 
        "Value Elicitation & Identity Work"
      ],
      outcome: "Become someone who naturally attracts success"
    },
    {
      number: "02", 
      title: "The Vision Bridge",
      subtitle: "From Divine Vision to Strategic Reality",
      description: "Bridge your transformed identity with crystal-clear vision. Discover your authentic Life's Task and design your mission with sacred precision.",
      highlights: [
        "Purpose Discovery Process",
        "Future Self Integration Exercise",
        "Mission-Vision Alignment",
        "Circle of Competence Mapping"
      ],
      outcome: "Magnetic clarity on your authentic destination"
    },
    {
      number: "03",
      title: "The Manifestation Engine", 
      subtitle: "The Architect's Blueprint for Strategic Success",
      description: "Deploy proven frameworks to systematically manifest your vision. Build systems that turn consciousness into commerce through strategic implementation.",
      highlights: [
        "Strategic Thinking Frameworks",
        "Systems Architecture Design",
        "Personal Brand Strategy",
        "Business Implementation Systems"
      ],
      outcome: "Systematic manifestation of desired outcomes"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  const moduleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <section className="preview sacred-bg">
        <div className="golden-section">
          <motion.div 
            className="preview-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div className="preview-header" variants={moduleVariants}>
              <h2 className="consciousness-title">The Complete Activation Protocol</h2>
              <p className="consciousness-subtitle">
                3 Modules • Interactive Experience • Consciousness Transformation
              </p>
            </motion.div>

            <motion.div className="modules-timeline" variants={containerVariants}>
              {modules.map((module, index) => (
                <motion.div 
                  key={index}
                  className="module-card consciousness-hover-lift"
                  variants={moduleVariants}
                >
                  <div className="module-number">{module.number}</div>
                  <div className="module-content">
                    <h3 className="module-title">{module.title}</h3>
                    <p className="module-subtitle">{module.subtitle}</p>
                    <p className="module-description">{module.description}</p>
                    
                    <div className="module-highlights">
                      <h4>Key Components:</h4>
                      <ul>
                        {module.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="module-outcome">
                      <strong>Outcome: </strong>{module.outcome}
                    </div>
                  </div>
                  
                  {index < modules.length - 1 && (
                    <div className="connection-line"></div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="preview-cta" variants={moduleVariants}>
              <div className="cta-content">
                <h3>Ready to Activate Your Divine Creative Authority?</h3>
                <p>
                  Join me on this journey as we ascend and enhance the conscious collective. Together we'll manifested 
                  unprecedented success through this proven protocol.
                </p>
                <button 
                  className="consciousness-button animate-golden-pulse"
                  onClick={() => setShowModal(true)}
                >
                  Tap in
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {showModal && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div 
              className="modal-popup"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
              
              <div className="modal-header">
                <h3>Join the Consciousness Revolution</h3>
                <p>Be the first to experience the Visionary Creator's Activation Protocol</p>
              </div>
              
              {!isSubmitted ? (
                <form onSubmit={handleModalSubmit} data-netlify="true" name="tap-in-signup">
                  <input type="hidden" name="form-name" value="tap-in-signup" />
                  
                  <input
                    type="email"
                    name="email"
                    className="consciousness-input"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  
                  <input
                    type="tel"
                    name="phone"
                    className="consciousness-input"
                    placeholder="Phone number (optional)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  
                  <button type="submit" className="consciousness-button">
                    Activate Now
                  </button>
                </form>
              ) : (
                <div className="success-content">
                  <h4>Welcome to the Collective</h4>
                  <p>Your consciousness activation journey begins now. Check your email for next steps.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Preview;
