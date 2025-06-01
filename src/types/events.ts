
export interface Event {
  id: string;
  title: string;
  description?: string;
  event_date: string;
  event_time: string;
  location?: string;
  team_id: string;
  created_by: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  created_at: string;
  updated_at: string;
}

export interface EventAssignment {
  id: string;
  event_id: string;
  user_id: string;
  role_in_event?: string;
  confirmed: boolean;
  created_at: string;
}

export interface CreateEventRequest {
  title: string;
  description?: string;
  event_date: string;
  event_time: string;
  location?: string;
  team_id: string;
}

export interface UpdateEventRequest extends Partial<CreateEventRequest> {
  status?: 'pending' | 'confirmed' | 'cancelled';
}
