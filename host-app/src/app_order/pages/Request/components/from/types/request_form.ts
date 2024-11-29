export interface FormRequest {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  description: string;
  requestTypeId: number;
  attachment: string,
  language: string;
}