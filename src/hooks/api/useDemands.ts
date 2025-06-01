
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { demandsService } from '@/services/api/demandsService';
import { CreateDemandRequest, UpdateDemandRequest } from '@/types/demands';
import { useToast } from '@/hooks/use-toast';

export const useDemands = () => {
  return useQuery({
    queryKey: ['demands'],
    queryFn: () => demandsService.getDemands(),
    staleTime: 2 * 60 * 1000, // 2 minutos
  });
};

export const useCreateDemand = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (demandData: CreateDemandRequest) => demandsService.createDemand(demandData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['demands'] });
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
      toast({
        title: 'Sucesso',
        description: 'Demanda criada com sucesso!',
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Erro',
        description: error.message || 'Erro ao criar demanda',
        variant: 'destructive',
      });
    },
  });
};

export const useUpdateDemand = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateDemandRequest }) => 
      demandsService.updateDemand(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['demands'] });
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
      toast({
        title: 'Sucesso',
        description: 'Demanda atualizada com sucesso!',
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Erro',
        description: error.message || 'Erro ao atualizar demanda',
        variant: 'destructive',
      });
    },
  });
};

export const useDeleteDemand = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (id: string) => demandsService.deleteDemand(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['demands'] });
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
      toast({
        title: 'Sucesso',
        description: 'Demanda excluída com sucesso!',
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Erro',
        description: error.message || 'Erro ao excluir demanda',
        variant: 'destructive',
      });
    },
  });
};
