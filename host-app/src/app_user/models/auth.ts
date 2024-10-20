export interface Auth {
  wasSuccess?: boolean;
  status?: number;
  message?: string;
  token: string;
  expiration: string;
}