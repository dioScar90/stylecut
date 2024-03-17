import { IAuthRepository } from "../../interfaces/repositories/auth";
import { IAuthService } from "../../interfaces/services/auth";
import { Result } from "../../result";

export class AuthRepository implements IAuthRepository {
  constructor(private readonly authService: IAuthService) { }

  async register(email: string, name: string, password: string): Promise<Result<{ id: string } | undefined>> {
    try {
      const res = await this.authService.register(email, name, password)
      return new Result(true, { id: res.data?.id })
    } catch (err) {
      return new Result(false, undefined, new Error('Error ao cadastrar'))
    }
  }

  async login(email: string, password: string): Promise<Result<{ token: string, refreshToken: string } | undefined>> {
    try {
      const res = await this.authService.login(email, password)
      return new Result(true, { token: res.data.token, refreshToken: res.data.refreshToken })
    } catch (err) {
      return new Result(false, undefined, new Error('Error no login'))
    }
  }
}
