import { IAuthRepository } from "../../../dataLayer/interfaces/repositories/auth"
import { IUserRepository } from "../../../dataLayer/interfaces/repositories/users"
import { IAuthService } from "../../../dataLayer/interfaces/services/auth"
import { Result } from "../../../dataLayer/result"

export class UnableToRegisterError extends Error {
  constructor() {
    super('Não foi possível realizar o login')
  }
}

export class UnableToLoginError extends Error {
  constructor() {
    super('Não foi possível realizar o login')
  }
}

export class UnableToUpdateAvatarError extends Error {
  constructor() {
    super('Não foi possível realizar o update do avatar')
  }
}

export class RegisterUseCase {
  constructor(private readonly authRepository: IAuthRepository, private readonly usersRepository: IUserRepository) {}

  async execute(email: string, name: string, password: string, file?: File) {
    const res = await this.authRepository.register(email, name, password)

    if (!res.isSuccess) {
      return new Result(false, undefined, new UnableToRegisterError())
    }

    const resLogin = await this.authRepository.login(email, password)

    if (!resLogin.isSuccess || !file) {
      return new Result(false, undefined, new UnableToLoginError())
    }

    try {
      const updateAvatarRes = await this.usersRepository.updateAvatar(file)
      return new Result(true, updateAvatarRes.value, undefined)
    } catch (err) {
      return new Result(false, undefined, new UnableToUpdateAvatarError())
    }
  }
}
