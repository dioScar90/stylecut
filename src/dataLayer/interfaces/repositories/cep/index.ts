import { Result } from '../../../result'

interface IFindCepResponse {
  city: string
  street: string
}

export interface ICepRepository {
  find(cep: string): Promise<Result<IFindCepResponse | undefined>>
}
