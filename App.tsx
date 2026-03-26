import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Features from './components/Features';
import Healing from './components/Healing';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Features />
        <Healing />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;