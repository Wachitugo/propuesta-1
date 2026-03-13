import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DashboardPreview from './components/DashboardPreview';
import ContextSection from './components/ContextSection';
import SolutionSection from './components/SolutionSection';
import FlowSection from './components/FlowSection';
import MonitoringSection from './components/MonitoringSection';
import Footer from './components/Footer';
import BenefitsSection from './components/BenefitsSection';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ContextSection />
        <SolutionSection />
        <MonitoringSection />
        <FlowSection />
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
