import { combineReducers } from "redux"
import { userReducer } from "./user-reducer";
import { todoReducer } from "./todo-reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer
});

export type RootState = ReturnType<typeof rootReducer>