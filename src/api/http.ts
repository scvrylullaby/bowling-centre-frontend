import type { CreateAxiosDefaults } from 'axios'
import axios from 'axios'
import { APP_CONFIG } from '@/constants/app.constants'

const options: CreateAxiosDefaults = {
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
}

export const http = axios.create(options)

http.interceptors.response.use(
  config => config,
  async error => {
    throw error
  }
)
