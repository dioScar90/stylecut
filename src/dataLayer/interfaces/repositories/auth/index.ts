import { Result } from "../../../result";

export interface IAuthRepository {
  register(email: string, name: string, password: string): Promise<Result<{ id: string } | undefined>>
  login(email: string, password: string): Promise<Result<{ token: string, refreshToken: string } | undefined>>
}
