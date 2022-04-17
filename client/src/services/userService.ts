import { IUserCreateDTO } from '@/models'
import axios from '@/apis/axios.instance'

const createUser = async (createUserDTO: IUserCreateDTO) => {
  await axios.post("/users", createUserDTO)
    .then(response => {
      return response
    }).catch(error => {
      return error.response
    });
}

export { createUser }