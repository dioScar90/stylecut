import { AxiosResponse } from "axios";

export interface IAuthService {
  register(email: string, name: string, password: string): Promise<AxiosResponse<{ id: string, name: string, email: string }>>
  login(email: string, password: string): Promise<AxiosResponse<{ token: string, refreshToken: string, message: string, statusCode: number }>>
}
