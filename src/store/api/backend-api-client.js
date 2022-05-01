import axios from 'axios'
import Cookies from 'js-cookie'

export const URL = process.env.VUE_APP_API_BASE_URL

const apiClient = axios.create({
  baseURL: URL,
})

const getAuthToken = () => Cookies.get('user-token')
const authInterceptor = (config) => {
  config.headers['authorization'] = `Bearer ${getAuthToken()}`
  return config
}

apiClient.interceptors.request.use(authInterceptor)

export default apiClient
