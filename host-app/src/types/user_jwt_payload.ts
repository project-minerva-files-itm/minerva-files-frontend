import { JwtPayload } from "jwt-decode";

export interface UserJwtPayload extends JwtPayload {
  FirstName: string;
  LastName: string;
  Rol: string;
  Id: string;
  Photo: string;
}