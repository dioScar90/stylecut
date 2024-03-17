import axios from "axios"
import { CepRepository } from "../../../dataLayer/repositories/cep"
import { CepService } from "../../../dataLayer/services/cep"
import { RegisterCard } from "../../components/RegisterCard"

export const Register = () => {
  return (
    <div className="h-screen bg-blue-400 flex flex-col justify-center items-center">
      <RegisterCard cepRepository={new CepRepository(new CepService(axios))} />
    </div>
  )
}
