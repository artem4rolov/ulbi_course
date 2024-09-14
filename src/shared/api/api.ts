import axios from 'axios'
import { LOCAL_STORAGE_USER_KEY } from 'shared/constants'

// const baseURL = __IS_DEV__ ? 'http://localhost:8000' : 'https://production.ru'

export const api = axios.create({
  baseURL: String(__API_URL__),
  headers: {
    authorization: localStorage.getItem(LOCAL_STORAGE_USER_KEY),
  },
})
