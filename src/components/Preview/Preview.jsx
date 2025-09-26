import React from 'react';
import { motion } from 'framer-motion';
import './Preview.css';

const Preview = () => {
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
              <button className="consciousness-button animate-golden-pulse">
                Tap in
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Preview;
