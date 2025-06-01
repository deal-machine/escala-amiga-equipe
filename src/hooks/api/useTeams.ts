
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { teamsService } from '@/services/api/teamsService';
import { CreateTeamRequest, UpdateTeamRequest } from '@/types/teams';
import { useToast } from '@/hooks/use-toast';

export const useTeams = () => {
  return useQuery({
    queryKey: ['teams'],
    queryFn: () => teamsService.getTeams(),
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
};

export const useProfiles = () => {
  return useQuery({
    queryKey: ['profiles'],
    queryFn: () => teamsService.getProfiles(),
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
};

export const useTeamMembers = (teamId: string) => {
  return useQuery({
    queryKey: ['teams', teamId, 'members'],
    queryFn: () => teamsService.getTeamMembers(teamId),
    enabled: !!teamId,
    staleTime: 2 * 60 * 1000, // 2 minutos
  });
};

export const useCreateTeam = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (teamData: CreateTeamRequest) => teamsService.createTeam(teamData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['teams'] });
      toast({
        title: 'Sucesso',
        description: 'Equipe criada com sucesso!',
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Erro',
        description: error.message || 'Erro ao criar equipe',
        variant: 'destructive',
      });
    },
  });
};

export const useUpdateTeam = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateTeamRequest }) => 
      teamsService.updateTeam(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['teams'] });
      toast({
        title: 'Sucesso',
        description: 'Equipe atualizada com sucesso!',
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Erro',
        description: error.message || 'Erro ao atualizar equipe',
        variant: 'destructive',
      });
    },
  });
};

export const useDeleteTeam = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (id: string) => teamsService.deleteTeam(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['teams'] });
      toast({
        title: 'Sucesso',
        description: 'Equipe excluída com sucesso!',
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Erro',
        description: error.message || 'Erro ao excluir equipe',
        variant: 'destructive',
      });
    },
  });
};
