
import { useQuery } from '@tanstack/react-query';
import { dashboardService } from '@/services/api/dashboardService';

export const useDashboardStats = () => {
  return useQuery({
    queryKey: ['dashboard', 'stats'],
    queryFn: () => dashboardService.getStats(),
    staleTime: 5 * 60 * 1000, // 5 minutos
    refetchInterval: 30 * 1000, // Atualiza a cada 30 segundos
  });
};

export const useRecentActivity = () => {
  return useQuery({
    queryKey: ['dashboard', 'recent-activity'],
    queryFn: () => dashboardService.getRecentActivity(),
    staleTime: 2 * 60 * 1000, // 2 minutos
    refetchInterval: 60 * 1000, // Atualiza a cada minuto
  });
};
