import axios from 'axios'
import { LOCAL_STORAGE_USER_KEY } from 'shared/constants'

// const baseURL = __IS_DEV__ ? 'http://localhost:8000' : 'https://production.ru'

export const api = axios.create({
  baseURL: String(__API_URL__),
  headers: {
    // если оставить без interceptor, то после авторизации, в инстансе
    // axios в заголовке authorization будет пустая строка
    // authorization: localStorage.getItem(LOCAL_STORAGE_USER_KEY) || '',
  },
})

api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization =
      localStorage.getItem(LOCAL_STORAGE_USER_KEY) || ''
  }

  return config
})
