import { ILoginResponse, IUserLoginCredentials } from '@/models'
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery, IAxiosBaseQueryFn } from '@/services/AxiosBaseQuery'

const AUTH_API_REDUCER_PATH = 'authApi'
const AUTH_TAG = 'authTag'

type IBuilder = EndpointBuilder<IAxiosBaseQueryFn, typeof AUTH_TAG, typeof AUTH_API_REDUCER_PATH>

const login = (builder: IBuilder) => {
  return builder.mutation<ILoginResponse, IUserLoginCredentials>({
    query(credentials) {
      return {
        url: '/auth',
        method: 'POST',
        data: credentials
      }
    }
  })
}

const authApi = createApi({
  reducerPath: AUTH_API_REDUCER_PATH,
  tagTypes: [AUTH_TAG],
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    login: login(builder)
  })
})

const { useLoginMutation } = authApi

export { authApi, useLoginMutation }
