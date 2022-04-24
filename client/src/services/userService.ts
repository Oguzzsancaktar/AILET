import { createApi } from '@reduxjs/toolkit/query/react'
import { IUser, IUserCreateDTO } from '@/models'
import { axiosBaseQuery, IAxiosBaseQueryFn } from '@/services/AxiosBaseQuery'
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

const USER_REDUCER_PATH = 'userApi'
const USER_TAG_TYPE = 'userTag'

type IBuilder = EndpointBuilder<IAxiosBaseQueryFn, typeof USER_TAG_TYPE, typeof USER_REDUCER_PATH>

const createUser = (builder: IBuilder) => {
  return builder.mutation<void, IUserCreateDTO>({
    query(userCreateDto) {
      return {
        url: '/users',
        method: 'POST',
        data: userCreateDto
      }
    },
    invalidatesTags() {
      return [{ type: USER_TAG_TYPE, id: 'LIST' }]
    }
  })
}

const getUserById = (builder: IBuilder) => {
  return builder.query<IUser, IUser['_id']>({
    query(userId) {
      return {
        url: `/users/${userId}`,
        method: 'GET'
      }
    },
    providesTags(result) {
      if (!result) return [{ type: USER_TAG_TYPE, id: 'LIST' }]
      return [
        { type: USER_TAG_TYPE, id: result._id },
        { type: USER_TAG_TYPE, id: 'LIST' }
      ]
    }
  })
}

const userApi = createApi({
  reducerPath: USER_REDUCER_PATH,
  tagTypes: [USER_TAG_TYPE],
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    createUser: createUser(builder),
    getUserById: getUserById(builder)
  })
})

const { useCreateUserMutation, useGetUserByIdQuery } = userApi
export { userApi, useGetUserByIdQuery, useCreateUserMutation }
