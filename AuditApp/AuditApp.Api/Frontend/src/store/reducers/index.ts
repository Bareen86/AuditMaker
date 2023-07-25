import { combineReducers } from "redux"
import { todoReducer } from "./todo-reducer";
import { templateReducer } from "./template-reducer";
import { userReducer } from "./user-reducer";

export const rootReducer = combineReducers({
  todo: todoReducer,
  hotelTemplate: templateReducer,
  user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>