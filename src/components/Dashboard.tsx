
import { Calendar, KanbanSquare, Users, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useDashboardStats, useRecentActivity } from "@/hooks/api/useDashboard";
import { Skeleton } from "@/components/ui/skeleton";

const Dashboard = () => {
  const { data: stats, isLoading: statsLoading, error: statsError } = useDashboardStats();
  const { data: activities, isLoading: activitiesLoading, error: activitiesError } = useRecentActivity();

  const formatTimeAgo = (timestamp: string) => {
    const now = new Date();
    const date = new Date(timestamp);
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Agora mesmo';
    if (diffInHours === 1) return '1 hora atrás';
    if (diffInHours < 24) return `${diffInHours} horas atrás`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return '1 dia atrás';
    return `${diffInDays} dias atrás`;
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Bem-vindo ao EscalaFácil! 👋
        </h2>
        <p className="text-slate-600">
          Gerencie suas escalas de equipe e demandas de forma simples e organizada.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">
              Próximos Eventos
            </CardTitle>
            <Calendar className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            {statsLoading ? (
              <Skeleton className="h-8 w-16" />
            ) : statsError ? (
              <div className="text-red-500 text-sm">Erro</div>
            ) : (
              <div className="text-2xl font-bold text-slate-800">{stats?.upcomingEvents || 0}</div>
            )}
            <p className="text-xs text-slate-500">Esta semana</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">
              Demandas Ativas
            </CardTitle>
            <KanbanSquare className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            {statsLoading ? (
              <Skeleton className="h-8 w-16" />
            ) : statsError ? (
              <div className="text-red-500 text-sm">Erro</div>
            ) : (
              <div className="text-2xl font-bold text-slate-800">{stats?.activeDemands || 0}</div>
            )}
            <p className="text-xs text-slate-500">Em andamento</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">
              Membros da Equipe
            </CardTitle>
            <Users className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            {statsLoading ? (
              <Skeleton className="h-8 w-16" />
            ) : statsError ? (
              <div className="text-red-500 text-sm">Erro</div>
            ) : (
              <div className="text-2xl font-bold text-slate-800">{stats?.activeMembers || 0}</div>
            )}
            <p className="text-xs text-slate-500">Ativos</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">
              Taxa de Conclusão
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            {statsLoading ? (
              <Skeleton className="h-8 w-16" />
            ) : statsError ? (
              <div className="text-red-500 text-sm">Erro</div>
            ) : (
              <div className="text-2xl font-bold text-slate-800">{stats?.completionRate || 0}%</div>
            )}
            <p className="text-xs text-slate-500">Este mês</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-lg text-slate-800">Ações Rápidas</CardTitle>
            <CardDescription>
              Acesse rapidamente as funcionalidades principais
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <button className="w-full flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-left">
              <Calendar className="w-5 h-5 text-blue-600" />
              <div>
                <div className="font-medium text-slate-800">Criar Nova Escala</div>
                <div className="text-sm text-slate-500">Organize um novo evento</div>
              </div>
            </button>
            
            <button className="w-full flex items-center space-x-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-left">
              <KanbanSquare className="w-5 h-5 text-purple-600" />
              <div>
                <div className="font-medium text-slate-800">Nova Demanda</div>
                <div className="text-sm text-slate-500">Criar nova tarefa</div>
              </div>
            </button>
            
            <button className="w-full flex items-center space-x-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-left">
              <Users className="w-5 h-5 text-green-600" />
              <div>
                <div className="font-medium text-slate-800">Gerenciar Equipe</div>
                <div className="text-sm text-slate-500">Adicionar membros</div>
              </div>
            </button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-lg text-slate-800">Atividades Recentes</CardTitle>
            <CardDescription>
              Últimas atualizações do sistema
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {activitiesLoading ? (
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <Skeleton className="w-2 h-2 rounded-full mt-2" />
                    <div className="flex-1 space-y-1">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-3 w-20" />
                    </div>
                  </div>
                ))}
              </div>
            ) : activitiesError ? (
              <div className="flex items-center space-x-2 text-red-500">
                <AlertCircle className="w-4 h-4" />
                <span className="text-sm">Erro ao carregar atividades</span>
              </div>
            ) : activities && activities.length > 0 ? (
              activities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'event_assignment' ? 'bg-green-500' :
                    activity.type === 'demand_created' ? 'bg-blue-500' :
                    'bg-purple-500'
                  }`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-800">
                      <span className="font-medium">{activity.user_name}</span> {activity.description}
                    </p>
                    <p className="text-xs text-slate-500">{formatTimeAgo(activity.timestamp)}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-500 text-center py-4">
                Nenhuma atividade recente
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
