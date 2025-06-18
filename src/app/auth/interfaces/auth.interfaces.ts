export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
}

export interface RegisterRequest {
  first_names: string;
  last_names: string;
  email: string;
  phone: string;
  gender: string;
  avatar_url?: string;
  password: string;
  role_id: number;
}

export interface UserResponse {
  first_names: string;
  last_names: string;
  email: string;
  phone: string;
  gender: string;
  avatar_url?: string;
  id: number;
  role_id: number;
  created_at: string;
  role?: {
    name: string;
    id: number;
  };
}
