import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import ContextSection from './components/ContextSection';
import SolutionSection from './components/SolutionSection';
import FlowSection from './components/FlowSection';
import MonitoringSection from './components/MonitoringSection';
import Footer from './components/Footer';
import BenefitsSection from './components/BenefitsSection';
import ContactModal from './components/ContactModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useScrollAnimation();

  return (
    <div className="app">
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <Hero />
        <ContextSection />
        <SolutionSection />
        <MonitoringSection />
        <FlowSection />
        <BenefitsSection />
      </main>
      <Footer onOpenModal={() => setIsModalOpen(true)} />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
