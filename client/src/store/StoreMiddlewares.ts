import { userApi } from '@/services/userService'
import { authApi } from '@/services/authService'

const StoreMiddlewares = [authApi.middleware, userApi.middleware]

export default StoreMiddlewares
