export interface AuthType {
  wasSuccess?: boolean;
  status?: number;
  message?: string;
  token: string;
  expiration: string;
}