import { combineReducers } from "redux"
import { todoReducer } from "./todo-reducer";
import { templateReducer } from "./template-reducer";

export const rootReducer = combineReducers({
  todo: todoReducer,
  template: templateReducer
});

export type RootState = ReturnType<typeof rootReducer>