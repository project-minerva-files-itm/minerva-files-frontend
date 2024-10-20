export interface ResetPasswordType {
  UserId: string,
  email: string,
  newPassword: string,
  confirmPassword: string,
  token: string
};
