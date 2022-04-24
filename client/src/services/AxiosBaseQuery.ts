import axios from '@/apis/axios.instance'
import { BaseQueryFn } from '@reduxjs/toolkit/query'
import { AxiosError, AxiosRequestConfig } from 'axios'

type IAxiosBaseQueryFn = BaseQueryFn<AxiosRequestConfig, unknown, unknown>

const axiosBaseQuery = (): IAxiosBaseQueryFn => async config => {
  try {
    const result = await axios(config)
    return { data: result.data }
  } catch (axiosError) {
    let err = axiosError as any
    return {
      error: { status: err.status, data: err.data }
    }
  }
}

export { axiosBaseQuery }
export type { IAxiosBaseQueryFn }
