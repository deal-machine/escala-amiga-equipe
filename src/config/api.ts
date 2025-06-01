
export const API_CONFIG = {
  baseUrl: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const API_ENDPOINTS = {
  // Dashboard
  dashboard: {
    stats: '/dashboard/stats',
    recentActivity: '/dashboard/recent-activity',
  },
  
  // Events
  events: {
    list: '/events',
    create: '/events',
    getById: (id: string) => `/events/${id}`,
    update: (id: string) => `/events/${id}`,
    delete: (id: string) => `/events/${id}`,
    assignments: (id: string) => `/events/${id}/assignments`,
  },
  
  // Demands
  demands: {
    list: '/demands',
    create: '/demands',
    getById: (id: string) => `/demands/${id}`,
    update: (id: string) => `/demands/${id}`,
    delete: (id: string) => `/demands/${id}`,
  },
  
  // Teams
  teams: {
    list: '/teams',
    create: '/teams',
    getById: (id: string) => `/teams/${id}`,
    update: (id: string) => `/teams/${id}`,
    delete: (id: string) => `/teams/${id}`,
    members: (id: string) => `/teams/${id}/members`,
  },
  
  // Profiles
  profiles: {
    list: '/profiles',
    getById: (id: string) => `/profiles/${id}`,
    update: (id: string) => `/profiles/${id}`,
  },
};
