import { IUserRepository } from "../../interfaces/repositories/users";
import { IUsersService } from "../../interfaces/services/users";
import { Result } from "../../result";

export class UserRepository implements IUserRepository {
  constructor(private readonly userService: IUsersService) { }

  async updateAvatar(file: File): Promise<Result<{ avatarUrl: string; } | undefined>> {
    try {
      const res = await this.userService.updateAvatar(file)
      return new Result(true, { avatarUrl: res.data.avatarUrl })
    } catch (err) {
      return new Result(false, undefined, new Error('Error ao atualizar avatar'))
    }
  }
}
