import React, { useState } from "react";
import { ICepRepository } from "../../../dataLayer/interfaces/repositories/cep";

export const useRegisterCardViewModel = (cepRepository: ICepRepository) => {
  const [email, setEmail] = useState('João')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [cep, setCep] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [city, setCity] = useState('')

  const onCepChangeHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = await cepRepository.find(event.target.value)

    if (result.isSuccess) {
      setCity(result.value.city)
      setStreet(result.value.street)
    }
  }
}
