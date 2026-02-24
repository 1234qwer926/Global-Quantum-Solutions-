import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Scrollytelling from './components/Scrollytelling';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main>
        <Hero />
        <Scrollytelling />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
