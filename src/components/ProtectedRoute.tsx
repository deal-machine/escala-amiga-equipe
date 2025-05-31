
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireAdmin?: boolean;
  requireLeader?: boolean;
}

const ProtectedRoute = ({ 
  children, 
  requireAuth = true, 
  requireAdmin = false,
  requireLeader = false 
}: ProtectedRouteProps) => {
  const { user, isLoading, isAdmin, isLeader } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-slate-600">Carregando...</p>
        </div>
      </div>
    );
  }

  if (requireAuth && !user) {
    return <Navigate to="/auth" replace />;
  }

  if (requireAdmin && !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-slate-800">Acesso Negado</h2>
          <p className="text-slate-600">Você precisa ser administrador para acessar esta página.</p>
        </div>
      </div>
    );
  }

  if (requireLeader && !isLeader) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-slate-800">Acesso Negado</h2>
          <p className="text-slate-600">Você precisa ser líder ou administrador para acessar esta página.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
