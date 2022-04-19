import { IUserCreateDTO } from '@/models'
import axios from '@/apis/axios.instance'

const createUser = (createUserDTO: IUserCreateDTO) => {
  return axios.post("/users", createUserDTO)
}

export { createUser }