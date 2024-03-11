import { AxiosResponse } from 'axios'

export interface ICepService {
  find(cep: string): Promise<AxiosResponse<any>>
}