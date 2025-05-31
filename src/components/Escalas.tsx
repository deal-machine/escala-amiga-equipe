
import { useState } from "react";
import { Calendar, Plus, Users, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Escalas = () => {
  const [events] = useState([
    {
      id: 1,
      title: "Culto Domingo Manhã",
      date: "2024-06-02",
      time: "09:00",
      location: "Auditório Principal",
      team: ["Maria Silva", "João Santos", "Ana Costa"],
      description: "Culto dominical com louvor e mensagem",
      status: "confirmado"
    },
    {
      id: 2,
      title: "Reunião de Oração",
      date: "2024-06-05",
      time: "19:30",
      location: "Sala de Oração",
      team: ["Pedro Lima", "Carla Oliveira"],
      description: "Encontro semanal de oração",
      status: "pendente"
    },
    {
      id: 3,
      title: "Culto de Jovens",
      date: "2024-06-07",
      time: "19:00",
      location: "Sala dos Jovens",
      team: ["Lucas Mendes", "Beatriz Santos", "Rafael Costa"],
      description: "Culto especial para jovens",
      status: "confirmado"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmado':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pendente':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Gestão de Escalas</h2>
          <p className="text-slate-600">Organize e gerencie os eventos da sua equipe</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Nova Escala
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-slate-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Eventos este mês</p>
                <p className="text-xl font-bold text-slate-800">12</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Pessoas escaladas</p>
                <p className="text-xl font-bold text-slate-800">8</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Próximos 7 dias</p>
                <p className="text-xl font-bold text-slate-800">3</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Events List */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-800">Próximos Eventos</h3>
        {events.map((event) => (
          <Card key={event.id} className="border-slate-200 hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div className="flex-1">
                  <CardTitle className="text-lg text-slate-800">{event.title}</CardTitle>
                  <CardDescription className="mt-1">
                    {formatDate(event.date)} às {event.time}
                  </CardDescription>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(event.status)}`}>
                  {event.status === 'confirmado' ? 'Confirmado' : 'Pendente'}
                </span>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                <p className="text-sm text-slate-600">{event.description}</p>
                
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>

                <div className="flex items-start space-x-2">
                  <Users className="w-4 h-4 text-slate-600 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-slate-600 mb-1">Equipe escalada:</p>
                    <div className="flex flex-wrap gap-2">
                      {event.team.map((member, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-100 text-slate-700 rounded-md text-xs"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-2 pt-2">
                  <Button variant="outline" size="sm">
                    Editar
                  </Button>
                  <Button variant="outline" size="sm">
                    Ver Detalhes
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Escalas;
