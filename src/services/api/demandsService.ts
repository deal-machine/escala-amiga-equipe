
import { httpClient } from '@/services/httpClient';
import { API_ENDPOINTS } from '@/config/api';
import { Demand, CreateDemandRequest, UpdateDemandRequest } from '@/types/demands';

class DemandsService {
  async getDemands(): Promise<Demand[]> {
    // Mock data - substitua pela chamada real da API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: '1',
            title: 'Configurar sistema de som',
            description: 'Verificar e configurar o sistema de som para o culto de domingo',
            priority: 'high',
            status: 'new',
            assigned_to: 'user-1',
            requesting_team_id: 'team-1',
            created_by: 'user-2',
            due_date: '2024-06-03',
            created_at: '2024-06-01T10:00:00Z',
            updated_at: '2024-06-01T10:00:00Z',
          },
          {
            id: '2',
            title: 'Criar banner para evento',
            description: 'Design do banner para divulgação do evento especial de jovens',
            priority: 'medium',
            status: 'in_progress',
            assigned_to: 'user-3',
            requesting_team_id: 'team-2',
            created_by: 'user-4',
            due_date: '2024-06-05',
            created_at: '2024-05-30T14:00:00Z',
            updated_at: '2024-06-01T09:00:00Z',
          },
        ]);
      }, 500);
    });

    // Implementação real (descomente quando a API estiver pronta):
    // const response = await httpClient.get<Demand[]>(API_ENDPOINTS.demands.list);
    // return response.data;
  }

  async createDemand(demandData: CreateDemandRequest): Promise<Demand> {
    console.log('Creating demand:', demandData);
    
    // Mock implementation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: `demand-${Date.now()}`,
          title: demandData.title,
          description: demandData.description,
          priority: demandData.priority || 'medium',
          status: 'new',
          assigned_to: demandData.assigned_to,
          requesting_team_id: demandData.requesting_team_id,
          created_by: 'current-user-id',
          due_date: demandData.due_date,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        });
      }, 400);
    });

    // Implementação real (descomente quando a API estiver pronta):
    // const response = await httpClient.post<Demand>(API_ENDPOINTS.demands.create, demandData);
    // return response.data;
  }

  async updateDemand(id: string, demandData: UpdateDemandRequest): Promise<Demand> {
    console.log('Updating demand:', id, demandData);
    
    // Mock implementation
    const demands = await this.getDemands();
    const demand = demands.find(d => d.id === id);
    
    if (!demand) {
      throw new Error('Demand not found');
    }

    return {
      ...demand,
      ...demandData,
      updated_at: new Date().toISOString(),
    };

    // Implementação real (descomente quando a API estiver pronta):
    // const response = await httpClient.put<Demand>(API_ENDPOINTS.demands.update(id), demandData);
    // return response.data;
  }

  async deleteDemand(id: string): Promise<void> {
    console.log('Deleting demand:', id);
    
    // Mock implementation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 300);
    });

    // Implementação real (descomente quando a API estiver pronta):
    // await httpClient.delete(API_ENDPOINTS.demands.delete(id));
  }
}

export const demandsService = new DemandsService();
