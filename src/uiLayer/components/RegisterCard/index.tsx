import { ICepRepository } from "../../../dataLayer/interfaces/repositories/cep"
import { RegisterUseCase } from "../../../domainLayer/usecases/register"
import { useRegisterCardViewModel } from "./useRegisterViewModel"

export const RegisterCard = ({ cepRepository }: { cepRepository: ICepRepository }) => {
  const { email, name, password, onSubmitHandler } = useRegisterCardViewModel(cepRepository, new RegisterUseCase())

  return (
    <form
      action=""
      className="flex flex-col gap-y-3 p-4 rounded-xl bg-white w-96"
      onSubmit={onSubmitHandler}
    >
      <input type="text" placeholder="email" value={email} className="border" />
      <input type="text" placeholder="name" value={name} className="border" />
      {/* <input type="text" placeholder="cep" value={name} className="border" /> */}
      {/* <input type="text" placeholder="street" value={name} className="border" /> */}
      {/* <input type="text" placeholder="city" value={name} className="border" /> */}
      {/* <input type="text" placeholder="number" value={name} className="border" /> */}
      <input
        type="text"
        placeholder="password"
        value={password}
        className="border"
      />
      <button type="submit">Register</button>

    </form>
  )
}
