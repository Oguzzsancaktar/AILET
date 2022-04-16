import { IUserCreateDTO } from '@/models'
import axios from 'axios'

const createUser = async (createUserDTO: IUserCreateDTO) => {
  return await axios.post("/users", createUserDTO)
}

export { createUser }