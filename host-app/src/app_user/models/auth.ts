export interface AuthType {
  wasSuccess?: boolean;
  succeeded?: boolean;
  status?: number;
  message?: string;
  token: string;
  expiration: string;
}