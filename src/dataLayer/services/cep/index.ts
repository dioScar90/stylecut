import { AxiosInstance } from 'axios'
import { ICepService } from '../../interfaces/services/cep'

export class CepService implements ICepService {
  constructor(private readonly axios: AxiosInstance) {}

  find(cep: string) {
    return this.axios.get(`https://viacep.com.br/ws/${cep}/json/`)
  }
}