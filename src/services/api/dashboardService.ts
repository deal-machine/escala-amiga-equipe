
import { httpClient } from '@/services/httpClient';
import { API_ENDPOINTS } from '@/config/api';
import { DashboardStats, RecentActivity } from '@/types/dashboard';

class DashboardService {
  async getStats(): Promise<DashboardStats> {
    // Mock data - substitua pela chamada real da API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          upcomingEvents: 3,
          activeDemands: 7,
          activeMembers: 12,
          completionRate: 89,
          eventsThisWeek: 3,
          eventsThisMonth: 12,
        });
      }, 500);
    });

    // Implementação real (descomente quando a API estiver pronta):
    // const response = await httpClient.get<DashboardStats>(API_ENDPOINTS.dashboard.stats);
    // return response.data;
  }

  async getRecentActivity(): Promise<RecentActivity[]> {
    // Mock data - substitua pela chamada real da API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: '1',
            type: 'event_assignment',
            description: 'foi escalada para o Culto Domingo',
            user_name: 'Maria Silva',
            timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
          },
          {
            id: '2',
            type: 'demand_created',
            description: 'Nova demanda criada: Configurar som',
            user_name: 'João Santos',
            timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
          },
          {
            id: '3',
            type: 'demand_completed',
            description: 'concluiu: Banner evento',
            user_name: 'Ana Costa',
            timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
          },
        ]);
      }, 300);
    });

    // Implementação real (descomente quando a API estiver pronta):
    // const response = await httpClient.get<RecentActivity[]>(API_ENDPOINTS.dashboard.recentActivity);
    // return response.data;
  }
}

export const dashboardService = new DashboardService();
