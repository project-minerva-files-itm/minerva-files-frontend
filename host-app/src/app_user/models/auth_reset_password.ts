export interface ResetPasswordType {
  UserId: string,
  email: string,
  newPassword: string,
  confirmPassword: string,
  currentPassword: string,
  confirm: string,
  token: string
};
