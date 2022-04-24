import { createApi } from '@reduxjs/toolkit/query/react'
import { IUser } from '@/models'
import { axiosBaseQuery, IAxiosBaseQueryFn } from '@/services/AxiosBaseQuery'
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

const USER_REDUCER_PATH = 'userApi'
const USER_TAG_TYPE = 'userTag'

type IBuilder = EndpointBuilder<IAxiosBaseQueryFn, typeof USER_TAG_TYPE, typeof USER_REDUCER_PATH>

const getUserById = (builder: IBuilder) => {
  return builder.query<IUser, IUser['_id']>({
    query(userId) {
      return {
        url: `/users/${userId}`,
        method: 'GET'
      }
    }
  })
}

const userApi = createApi({
  reducerPath: USER_REDUCER_PATH,
  tagTypes: [USER_TAG_TYPE],
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    getUserById: getUserById(builder)
  })
})

const { useGetUserByIdQuery } = userApi
export { userApi, useGetUserByIdQuery }
