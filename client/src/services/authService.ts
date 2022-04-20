import { IUserSigninCredentials } from '@/models'
import axios from '@/apis/axios.instance'

const signin = async (credentials: IUserSigninCredentials) => {
  return axios.post('/auth', credentials)
}

export { signin }
