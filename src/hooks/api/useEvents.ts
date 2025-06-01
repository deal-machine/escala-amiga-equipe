
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { eventsService } from '@/services/api/eventsService';
import { CreateEventRequest, UpdateEventRequest } from '@/types/events';
import { useToast } from '@/hooks/use-toast';

export const useEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: () => eventsService.getEvents(),
    staleTime: 2 * 60 * 1000, // 2 minutos
  });
};

export const useEventAssignments = (eventId: string) => {
  return useQuery({
    queryKey: ['events', eventId, 'assignments'],
    queryFn: () => eventsService.getEventAssignments(eventId),
    enabled: !!eventId,
    staleTime: 1 * 60 * 1000, // 1 minuto
  });
};

export const useCreateEvent = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (eventData: CreateEventRequest) => eventsService.createEvent(eventData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
      toast({
        title: 'Sucesso',
        description: 'Evento criado com sucesso!',
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Erro',
        description: error.message || 'Erro ao criar evento',
        variant: 'destructive',
      });
    },
  });
};

export const useUpdateEvent = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateEventRequest }) => 
      eventsService.updateEvent(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
      toast({
        title: 'Sucesso',
        description: 'Evento atualizado com sucesso!',
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Erro',
        description: error.message || 'Erro ao atualizar evento',
        variant: 'destructive',
      });
    },
  });
};

export const useDeleteEvent = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (id: string) => eventsService.deleteEvent(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
      toast({
        title: 'Sucesso',
        description: 'Evento excluído com sucesso!',
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Erro',
        description: error.message || 'Erro ao excluir evento',
        variant: 'destructive',
      });
    },
  });
};
