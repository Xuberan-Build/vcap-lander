import React from 'react';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Preview from './components/Preview/Preview';
// import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import './styles/consciousness.css';
import './styles/animations.css';

function App() {
  return (
    <div className="consciousness-app">
      <Hero />
      <Features />
      <Preview />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}

export default App;
