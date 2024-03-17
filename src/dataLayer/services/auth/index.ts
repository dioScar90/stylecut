import { AxiosInstance, AxiosResponse } from "axios";
import { IAuthService } from "../../interfaces/services/auth";

export class AuthService implements IAuthService {
  constructor(private readonly axios: AxiosInstance) {

  }

  register(email: string, name: string, password: string): Promise<AxiosResponse<{ id: string; name: string; email: string; }>> {
    return this.axios.post('/auth/register', { email, name, password })
  }

  login(email: string, password: string): Promise<AxiosResponse<{ token: string; refreshToken: string; message: string; statusCode: number; }>> {
    return this.axios.post('/auth/login', { email, password })
  }

}
