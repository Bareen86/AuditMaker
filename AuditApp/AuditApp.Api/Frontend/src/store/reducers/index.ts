import { combineReducers } from "redux"
import { userReducer } from "./user-reducer";
import { todoReducer } from "./todo-reducer";
import { templateReducer } from "./template-reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
  template: templateReducer
});

export type RootState = ReturnType<typeof rootReducer>