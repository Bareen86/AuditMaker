import { UserAction, UserActionTypes, UserState } from "../../types/user";


const initialState : UserState = {
  id : 0,
  isAdmin : false,
  name : "",
  secondName : "",
  errorMessage : ""
}

export const userReducer = (state = initialState, action : UserAction) : UserState => {
  switch (action.type){
    case UserActionTypes.LOGIN_USER:
      return {...state, id : action.payload.id, isAdmin : action.payload.isAdmin, name : action.payload.name, secondName : action.payload.secondName}
    case UserActionTypes.LOGOUT_USER:
      return {...state, id : 0, isAdmin : false, name : "", secondName : ""}
    case UserActionTypes.LOGIN_USER_ERROR:
      return {...state, errorMessage : action.payload }
    default: return state
  }
}