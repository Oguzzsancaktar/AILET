export default interface IAuthState {
  accessToken: string | null
  refreshToken: string | null
  authenticated: boolean | null
}
