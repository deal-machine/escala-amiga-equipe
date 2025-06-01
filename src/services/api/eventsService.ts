
import { httpClient } from '@/services/httpClient';
import { API_ENDPOINTS } from '@/config/api';
import { Event, CreateEventRequest, UpdateEventRequest, EventAssignment } from '@/types/events';

class EventsService {
  async getEvents(): Promise<Event[]> {
    // Mock data - substitua pela chamada real da API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: '1',
            title: 'Culto Domingo Manhã',
            description: 'Culto dominical com louvor e mensagem',
            event_date: '2024-06-02',
            event_time: '09:00',
            location: 'Auditório Principal',
            team_id: 'team-1',
            created_by: 'user-1',
            status: 'confirmed',
            created_at: '2024-06-01T10:00:00Z',
            updated_at: '2024-06-01T10:00:00Z',
          },
          {
            id: '2',
            title: 'Reunião de Oração',
            description: 'Encontro semanal de oração',
            event_date: '2024-06-05',
            event_time: '19:30',
            location: 'Sala de Oração',
            team_id: 'team-2',
            created_by: 'user-2',
            status: 'pending',
            created_at: '2024-06-01T11:00:00Z',
            updated_at: '2024-06-01T11:00:00Z',
          },
        ]);
      }, 600);
    });

    // Implementação real (descomente quando a API estiver pronta):
    // const response = await httpClient.get<Event[]>(API_ENDPOINTS.events.list);
    // return response.data;
  }

  async createEvent(eventData: CreateEventRequest): Promise<Event> {
    console.log('Creating event:', eventData);
    
    // Mock implementation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: `event-${Date.now()}`,
          ...eventData,
          created_by: 'current-user-id',
          status: 'pending',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        });
      }, 400);
    });

    // Implementação real (descomente quando a API estiver pronta):
    // const response = await httpClient.post<Event>(API_ENDPOINTS.events.create, eventData);
    // return response.data;
  }

  async updateEvent(id: string, eventData: UpdateEventRequest): Promise<Event> {
    console.log('Updating event:', id, eventData);
    
    // Mock implementation
    const events = await this.getEvents();
    const event = events.find(e => e.id === id);
    
    if (!event) {
      throw new Error('Event not found');
    }

    return {
      ...event,
      ...eventData,
      updated_at: new Date().toISOString(),
    };

    // Implementação real (descomente quando a API estiver pronta):
    // const response = await httpClient.put<Event>(API_ENDPOINTS.events.update(id), eventData);
    // return response.data;
  }

  async deleteEvent(id: string): Promise<void> {
    console.log('Deleting event:', id);
    
    // Mock implementation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 300);
    });

    // Implementação real (descomente quando a API estiver pronta):
    // await httpClient.delete(API_ENDPOINTS.events.delete(id));
  }

  async getEventAssignments(eventId: string): Promise<EventAssignment[]> {
    console.log('Getting event assignments for:', eventId);
    
    // Mock data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: '1',
            event_id: eventId,
            user_id: 'user-1',
            role_in_event: 'Vocal',
            confirmed: true,
            created_at: new Date().toISOString(),
          },
          {
            id: '2',
            event_id: eventId,
            user_id: 'user-2',
            role_in_event: 'Técnico',
            confirmed: false,
            created_at: new Date().toISOString(),
          },
        ]);
      }, 400);
    });

    // Implementação real (descomente quando a API estiver pronta):
    // const response = await httpClient.get<EventAssignment[]>(API_ENDPOINTS.events.assignments(eventId));
    // return response.data;
  }
}

export const eventsService = new EventsService();
