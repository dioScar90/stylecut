import { ICepRepository } from '../../interfaces/repositories/cep'
import { ICepService } from '../../interfaces/services/cep'
import { Result } from '../../result'

export class CepRepository implements ICepRepository {
  constructor(private readonly cepService: ICepService) {}

  async find(cep: string) {
    try {
      const res = await this.cepService.find(cep)
      return new Result(true, {
        city: res.data.localidade,
        street: res.data.logradouro,
      })
    } catch (err) {
      return new Result(false, undefined, new Error('CEP não encontrado'))
    }
  }
}
