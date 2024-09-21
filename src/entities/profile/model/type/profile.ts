import { Country } from 'entities/country'
import { Currency } from 'entities/currency'

export interface Profile {
  firstname?: string
  lastname?: string
  age?: number
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
}

export interface ProfileSchema {
  data?: Profile
  form?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
  validateError?: ValidateProfileError[]
}

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
}
