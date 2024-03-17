import { AxiosResponse } from "axios";

export interface IUsersService {
  updateAvatar(file: File): Promise<AxiosResponse<{ avatarUrl: string; statusCode: number }>>
}
