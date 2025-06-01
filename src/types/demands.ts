
export interface Demand {
  id: string;
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'new' | 'in_progress' | 'completed' | 'cancelled';
  assigned_to?: string;
  requesting_team_id?: string;
  created_by: string;
  due_date?: string;
  created_at: string;
  updated_at: string;
}

export interface CreateDemandRequest {
  title: string;
  description?: string;
  priority?: 'low' | 'medium' | 'high' | 'urgent';
  assigned_to?: string;
  requesting_team_id?: string;
  due_date?: string;
}

export interface UpdateDemandRequest extends Partial<CreateDemandRequest> {
  status?: 'new' | 'in_progress' | 'completed' | 'cancelled';
}
