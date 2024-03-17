import { Result } from "../../../result";

export interface IUserRepository {
  updateAvatar(file: File): Promise<Result<{ avatarUrl: string } | undefined>>
}
