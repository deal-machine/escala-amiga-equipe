
import { useState } from "react";
import { Plus, Circle, Clock, CheckCircle, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Demandas = () => {
  const [tasks] = useState([
    {
      id: 1,
      title: "Configurar sistema de som",
      description: "Verificar e configurar o sistema de som para o culto de domingo",
      status: "nova",
      priority: "alta",
      assignee: "João Santos",
      requester: "Ministério de Louvor",
      createdAt: "2024-06-01"
    },
    {
      id: 2,
      title: "Criar banner para evento",
      description: "Design do banner para divulgação do evento especial de jovens",
      status: "em-andamento",
      priority: "média",
      assignee: "Maria Silva",
      requester: "Ministério de Jovens",
      createdAt: "2024-05-30"
    },
    {
      id: 3,
      title: "Organizar cadeiras auditório",
      description: "Reorganizar as cadeiras do auditório para acomodar mais pessoas",
      status: "concluida",
      priority: "baixa",
      assignee: "Pedro Lima",
      requester: "Recepção",
      createdAt: "2024-05-28"
    },
    {
      id: 4,
      title: "Atualizar slides da apresentação",
      description: "Revisar e atualizar os slides para a apresentação de domingo",
      status: "nova",
      priority: "média",
      assignee: "Ana Costa",
      requester: "Ministério de Comunicação",
      createdAt: "2024-06-01"
    }
  ]);

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'nova':
        return {
          label: 'Nova',
          color: 'bg-blue-100 text-blue-800 border-blue-200',
          icon: Circle
        };
      case 'em-andamento':
        return {
          label: 'Em Andamento',
          color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
          icon: Clock
        };
      case 'concluida':
        return {
          label: 'Concluída',
          color: 'bg-green-100 text-green-800 border-green-200',
          icon: CheckCircle
        };
      default:
        return {
          label: 'Nova',
          color: 'bg-gray-100 text-gray-800 border-gray-200',
          icon: Circle
        };
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'alta':
        return 'bg-red-100 text-red-800';
      case 'média':
        return 'bg-yellow-100 text-yellow-800';
      case 'baixa':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const tasksByStatus = {
    nova: tasks.filter(task => task.status === 'nova'),
    'em-andamento': tasks.filter(task => task.status === 'em-andamento'),
    concluida: tasks.filter(task => task.status === 'concluida')
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Quadro de Demandas</h2>
          <p className="text-slate-600">Gerencie tarefas e solicitações da equipe</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Nova Demanda
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-slate-200">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">{tasksByStatus.nova.length}</p>
              <p className="text-sm text-slate-600">Novas</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">{tasksByStatus['em-andamento'].length}</p>
              <p className="text-sm text-slate-600">Em Andamento</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">{tasksByStatus.concluida.length}</p>
              <p className="text-sm text-slate-600">Concluídas</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-800">{tasks.length}</p>
              <p className="text-sm text-slate-600">Total</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {Object.entries(tasksByStatus).map(([status, statusTasks]) => {
          const statusConfig = getStatusConfig(status);
          const StatusIcon = statusConfig.icon;
          
          return (
            <div key={status} className="space-y-4">
              <div className="flex items-center space-x-2">
                <StatusIcon className="w-5 h-5 text-slate-600" />
                <h3 className="font-semibold text-slate-800 capitalize">
                  {statusConfig.label}
                </h3>
                <span className="bg-slate-200 text-slate-700 px-2 py-1 rounded-full text-xs">
                  {statusTasks.length}
                </span>
              </div>

              <div className="space-y-3">
                {statusTasks.map((task) => (
                  <Card key={task.id} className="border-slate-200 hover:shadow-md transition-shadow cursor-pointer">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start gap-2">
                        <CardTitle className="text-sm font-medium text-slate-800 leading-tight">
                          {task.title}
                        </CardTitle>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-xs text-slate-600 mb-3 line-clamp-2">
                        {task.description}
                      </CardDescription>

                      <div className="space-y-2 text-xs">
                        <div className="flex items-center space-x-2 text-slate-600">
                          <User className="w-3 h-3" />
                          <span>Responsável: {task.assignee}</span>
                        </div>
                        <div className="text-slate-500">
                          Solicitante: {task.requester}
                        </div>
                        <div className="text-slate-500">
                          Criado em: {new Date(task.createdAt).toLocaleDateString('pt-BR')}
                        </div>
                      </div>

                      <div className="flex justify-end mt-3">
                        <Button variant="ghost" size="sm" className="text-xs">
                          Ver detalhes
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {statusTasks.length === 0 && (
                  <div className="text-center p-6 text-slate-500 bg-slate-50 rounded-lg border-2 border-dashed border-slate-200">
                    <p className="text-sm">Nenhuma tarefa {statusConfig.label.toLowerCase()}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Demandas;
