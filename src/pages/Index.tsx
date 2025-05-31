
import { useState } from 'react';
import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard';
import Escalas from '@/components/Escalas';
import Demandas from '@/components/Demandas';
import Equipes from '@/components/Equipes';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'escalas':
        return <Escalas />;
      case 'demandas':
        return <Demandas />;
      case 'equipes':
        return <Equipes />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
