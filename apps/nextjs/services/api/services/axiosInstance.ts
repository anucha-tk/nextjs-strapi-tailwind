import axios from 'axios'

const baseURL: string = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:1337'
const apiKey: string = process.env.NEXT_PUBLIC_JWT_TOKEN || ''

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
})
