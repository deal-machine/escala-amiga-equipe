
import { useState } from "react";
import { Plus, Mail, Phone, Calendar, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Equipes = () => {
  const [members] = useState([
    {
      id: 1,
      name: "Maria Silva",
      email: "maria.silva@email.com",
      phone: "(11) 99999-1111",
      ministry: "Louvor",
      role: "Líder",
      status: "ativo",
      joinDate: "2024-01-15",
      eventsThisMonth: 4
    },
    {
      id: 2,
      name: "João Santos",
      email: "joao.santos@email.com",
      phone: "(11) 99999-2222",
      ministry: "Comunicação",
      role: "Membro",
      status: "ativo",
      joinDate: "2024-02-20",
      eventsThisMonth: 3
    },
    {
      id: 3,
      name: "Ana Costa",
      email: "ana.costa@email.com",
      phone: "(11) 99999-3333",
      ministry: "Recepção",
      role: "Membro",
      status: "ativo",
      joinDate: "2024-03-10",
      eventsThisMonth: 2
    },
    {
      id: 4,
      name: "Pedro Lima",
      email: "pedro.lima@email.com",
      phone: "(11) 99999-4444",
      ministry: "Louvor",
      role: "Membro",
      status: "inativo",
      joinDate: "2023-12-05",
      eventsThisMonth: 0
    },
    {
      id: 5,
      name: "Carla Oliveira",
      email: "carla.oliveira@email.com",
      phone: "(11) 99999-5555",
      ministry: "Jovens",
      role: "Líder",
      status: "ativo",
      joinDate: "2024-01-08",
      eventsThisMonth: 5
    }
  ]);

  const ministries = [...new Set(members.map(member => member.ministry))];
  const activeMembers = members.filter(member => member.status === 'ativo');

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getMinistryColor = (ministry: string) => {
    const colors = {
      'Louvor': 'bg-purple-100 text-purple-800',
      'Comunicação': 'bg-blue-100 text-blue-800',
      'Recepção': 'bg-green-100 text-green-800',
      'Jovens': 'bg-orange-100 text-orange-800'
    };
    return colors[ministry as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status: string) => {
    return status === 'ativo' 
      ? 'bg-green-100 text-green-800 border-green-200'
      : 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Gestão de Equipes</h2>
          <p className="text-slate-600">Gerencie os membros da sua equipe e ministérios</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Novo Membro
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-slate-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Membros Ativos</p>
                <p className="text-xl font-bold text-slate-800">{activeMembers.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Ministérios</p>
                <p className="text-xl font-bold text-slate-800">{ministries.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Total de Membros</p>
                <p className="text-xl font-bold text-slate-800">{members.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Calendar className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Eventos este mês</p>
                <p className="text-xl font-bold text-slate-800">
                  {activeMembers.reduce((sum, member) => sum + member.eventsThisMonth, 0)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Members Grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-800">Membros da Equipe</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map((member) => (
            <Card key={member.id} className="border-slate-200 hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-slate-100 text-slate-700 font-medium">
                        {getInitials(member.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base text-slate-800">{member.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {member.role}
                      </CardDescription>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(member.status)}`}>
                    {member.status === 'ativo' ? 'Ativo' : 'Inativo'}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <span className={`px-2 py-1 rounded-md text-xs font-medium ${getMinistryColor(member.ministry)}`}>
                      {member.ministry}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2 text-slate-600">
                      <Mail className="w-4 h-4" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-600">
                      <Phone className="w-4 h-4" />
                      <span>{member.phone}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs text-slate-500 pt-2 border-t border-slate-100">
                    <span>Desde: {new Date(member.joinDate).toLocaleDateString('pt-BR')}</span>
                    <span>{member.eventsThisMonth} eventos este mês</span>
                  </div>

                  <div className="flex justify-end space-x-2 pt-2">
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                    <Button variant="outline" size="sm">
                      Contato
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipes;
