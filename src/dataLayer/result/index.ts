export class Result<T> {
  #isSuccess: boolean
  #value?: T
  #error?: Error

  constructor(isSuccess: boolean, value?: T, error?: Error) {
    this.#isSuccess = isSuccess
    this.#value = value
    this.#error = error
  }

  get isSuccess() {
    return this.#isSuccess
  }

  get value() {
    if (!this.#isSuccess) {
      throw this.#error
    }
    return this.#value
  }

  get error() {
    return this.#error
  }
}
