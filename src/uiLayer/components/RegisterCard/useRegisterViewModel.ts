import React, { useState } from "react";
import { ICepRepository } from "../../../dataLayer/interfaces/repositories/cep";
import { RegisterUseCase, UnableToRegisterError } from "../../../domainLayer/usecases/register";

export const useRegisterCardViewModel = (cepRepository: ICepRepository, registerUseCase: RegisterUseCase) => {
  const [email, setEmail] = useState('João')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [cep, setCep] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [city, setCity] = useState('')
  const [file, setFile] = useState<File | undefined>()

  const onCepChangeHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = await cepRepository.find(event.target.value)

    if (result.isSuccess) {
      setCity(result.value.city)
      setStreet(result.value.street)
    }
  }

  const onSubmitHandler = async () => {
    const result = await registerUseCase.execute(email, name, password, file)

    if (result.error instanceof UnableToRegisterError) {
      alert('Error ao cadastrar => '+ result.error.message)
    }
  }

  return { email, name, password, onSubmitHandler }
}
