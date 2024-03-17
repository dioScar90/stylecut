import { AxiosInstance, AxiosResponse } from "axios";
import { IUsersService } from "../../interfaces/services/users";

export class UserService implements IUsersService {
  constructor(private readonly axios: AxiosInstance) { }

  updateAvatar(file: File): Promise<AxiosResponse<{ avatarUrl: string; statusCode: number; }>> {
    const formData = new FormData()
    formData.append('file', file)
    return this.axios.patch('')
  }
}
