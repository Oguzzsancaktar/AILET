import { toastError, toastWarning } from '@/utils/toastUtil'
import axios, { AxiosError } from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000'
})

axiosInstance.interceptors.response.use(
  res => {
    return res
  },
  (err: AxiosError<any>) => {
    const res = err.response
    const msg = res?.data?.error || res?.data?.errors[0]
    const status = res?.status ? res.status : 0

    if (status > 399 && status < 500) toastWarning(msg)
    else toastError(msg)
    return Promise.reject(res)
  }
)
export default axiosInstance
