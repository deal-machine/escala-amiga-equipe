
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard';
import Escalas from '@/components/Escalas';
import Demandas from '@/components/Demandas';
import Equipes from '@/components/Equipes';
import ProtectedRoute from '@/components/ProtectedRoute';

const Index = () => {
  const { user, isLoading } = useAuth();
  const [activeSection, setActiveSection] = useState('dashboard');

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-slate-600">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

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
    <ProtectedRoute>
      <div className="min-h-screen bg-slate-50">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderContent()}
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default Index;
