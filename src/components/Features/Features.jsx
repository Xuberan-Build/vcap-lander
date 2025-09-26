import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';

const Features = () => {
  const valueProps = [
    {
      title: "Transform Your Operating System",
      subtitle: "Module 1: The Inner Foundation",
      description: "Discover 10 core presuppositions to help your reality. Transform limiting beliefs into empowering certainties through proven NLP techniques and identity architecture work.",
      icon: "🧠",
      benefits: [
        "Eliminate self-sabotage at the unconscious level",
        "Embody your highest values with unshakeable certainty", 
        "Create natural confidence that doesn't depend on circumstances"
      ]
    },
    {
      title: "Design Your Divine Blueprint", 
      subtitle: "Module 2: Vision & Mission Alignment",
      description: "Bridge your transformed identity with crystal-clear vision. Discover your authentic Life's Task and create detailed mental movies of your ideal future.",
      icon: "🎯",
      benefits: [
        "Discover what you're truly here to create",
        "Generate magnetic pull toward your authentic desires",
        "Align every action with your deepest purpose"
      ]
    },
    {
      title: "Build Your Success Architecture",
      subtitle: "Module 3: Strategic Implementation", 
      description: "Deploy proven frameworks for systematic manifestation. Turn consciousness into commerce through strategic thinking, systems design, and authentic personal branding.",
      icon: "⚡",
      benefits: [
        "Create predictable results through systematic approaches",
        "Become the obvious choice in your market",
        "Express your consciousness through value creation"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="features sacred-bg">
      <div className="golden-section">
        <motion.div 
          className="features-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="features-header" variants={itemVariants}>
            <h2 className="consciousness-title">The Consciousness-to-Success Pipeline</h2>
            <p className="consciousness-subtitle">
              How consciousness transformation creates inevitable material success
            </p>
          </motion.div>

          <motion.div className="value-props-grid" variants={containerVariants}>
            {valueProps.map((prop, index) => (
              <motion.div 
                key={index}
                className="value-prop-card consciousness-hover-lift"
                variants={itemVariants}
              >
                <div className="prop-icon">{prop.icon}</div>
                <div className="prop-content">
                  <h3 className="prop-title">{prop.title}</h3>
                  <p className="prop-subtitle">{prop.subtitle}</p>
                  <p className="prop-description">{prop.description}</p>
                  <ul className="prop-benefits">
                    {prop.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="transformation-outcome" variants={itemVariants}>
            <div className="outcome-content">
              <h3>The Inevitable Result</h3>
              <p>
                You're not just someone with a business plan - you're someone whose consciousness 
                naturally creates value, whose authentic self magnetically attracts opportunities, 
                and whose strategic actions consistently manifest desired outcomes.
              </p>
              <p className="outcome-emphasis">
                This is more than personal development. It's more just business training. 
                This is consciousness activation for material manifestation - the complete 
                protocol for turning your awakened awareness into tangible success within the human experience.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
