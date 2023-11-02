export interface UserState {
  id : number
  name : string,
  secondName : string,
  isAdmin : boolean,
  errorMessage : string
}

export interface IUserLogin {
  login : string,
  password : string,
}

export enum UserActionTypes {
  LOGIN_USER = 'LOGIN_USER',
  LOGIN_USER_ERROR =  "LOGIN_USER_ERROR",
  LOGOUT_USER = 'LOGOUT_USER',

}

interface LoginUserAction {
  type: UserActionTypes.LOGIN_USER,
  payload : UserState
}

interface loginUserAuthErrorAction {
  type : UserActionTypes.LOGIN_USER_ERROR
  payload: string
}

interface LogoutUserAction {
  type: UserActionTypes.LOGOUT_USER
}

export type UserAction = LoginUserAction | LogoutUserAction | loginUserAuthErrorAction