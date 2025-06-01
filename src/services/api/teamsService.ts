
import { httpClient } from '@/services/httpClient';
import { API_ENDPOINTS } from '@/config/api';
import { Team, TeamMember, Profile, CreateTeamRequest, UpdateTeamRequest } from '@/types/teams';

class TeamsService {
  async getTeams(): Promise<Team[]> {
    // Mock data - substitua pela chamada real da API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 'team-1',
            name: 'Louvor',
            description: 'Ministério de louvor e adoração',
            created_by: 'user-1',
            created_at: '2024-01-01T10:00:00Z',
            updated_at: '2024-01-01T10:00:00Z',
          },
          {
            id: 'team-2',
            name: 'Comunicação',
            description: 'Ministério de comunicação e tecnologia',
            created_by: 'user-2',
            created_at: '2024-01-02T10:00:00Z',
            updated_at: '2024-01-02T10:00:00Z',
          },
        ]);
      }, 400);
    });

    // Implementação real (descomente quando a API estiver pronta):
    // const response = await httpClient.get<Team[]>(API_ENDPOINTS.teams.list);
    // return response.data;
  }

  async getProfiles(): Promise<Profile[]> {
    // Mock data - substitua pela chamada real da API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 'user-1',
            name: 'Maria Silva',
            email: 'maria.silva@email.com',
            created_at: '2024-01-15T10:00:00Z',
            updated_at: '2024-01-15T10:00:00Z',
          },
          {
            id: 'user-2',
            name: 'João Santos',
            email: 'joao.santos@email.com',
            created_at: '2024-02-20T10:00:00Z',
            updated_at: '2024-02-20T10:00:00Z',
          },
        ]);
      }, 350);
    });

    // Implementação real (descomente quando a API estiver pronta):
    // const response = await httpClient.get<Profile[]>(API_ENDPOINTS.profiles.list);
    // return response.data;
  }

  async getTeamMembers(teamId: string): Promise<TeamMember[]> {
    console.log('Getting team members for:', teamId);
    
    // Mock data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: '1',
            team_id: teamId,
            user_id: 'user-1',
            is_leader: true,
            created_at: '2024-01-15T10:00:00Z',
          },
          {
            id: '2',
            team_id: teamId,
            user_id: 'user-2',
            is_leader: false,
            created_at: '2024-02-20T10:00:00Z',
          },
        ]);
      }, 300);
    });

    // Implementação real (descomente quando a API estiver pronta):
    // const response = await httpClient.get<TeamMember[]>(API_ENDPOINTS.teams.members(teamId));
    // return response.data;
  }

  async createTeam(teamData: CreateTeamRequest): Promise<Team> {
    console.log('Creating team:', teamData);
    
    // Mock implementation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: `team-${Date.now()}`,
          name: teamData.name,
          description: teamData.description,
          created_by: 'current-user-id',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        });
      }, 400);
    });

    // Implementação real (descomente quando a API estiver pronta):
    // const response = await httpClient.post<Team>(API_ENDPOINTS.teams.create, teamData);
    // return response.data;
  }

  async updateTeam(id: string, teamData: UpdateTeamRequest): Promise<Team> {
    console.log('Updating team:', id, teamData);
    
    // Mock implementation
    const teams = await this.getTeams();
    const team = teams.find(t => t.id === id);
    
    if (!team) {
      throw new Error('Team not found');
    }

    return {
      ...team,
      ...teamData,
      updated_at: new Date().toISOString(),
    };

    // Implementação real (descomente quando a API estiver pronta):
    // const response = await httpClient.put<Team>(API_ENDPOINTS.teams.update(id), teamData);
    // return response.data;
  }

  async deleteTeam(id: string): Promise<void> {
    console.log('Deleting team:', id);
    
    // Mock implementation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 300);
    });

    // Implementação real (descomente quando a API estiver pronta):
    // await httpClient.delete(API_ENDPOINTS.teams.delete(id));
  }
}

export const teamsService = new TeamsService();
