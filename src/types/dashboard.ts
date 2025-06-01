
export interface DashboardStats {
  upcomingEvents: number;
  activeDemands: number;
  activeMembers: number;
  completionRate: number;
  eventsThisWeek: number;
  eventsThisMonth: number;
}

export interface RecentActivity {
  id: string;
  type: 'event_assignment' | 'demand_created' | 'demand_completed';
  description: string;
  user_name: string;
  timestamp: string;
}
