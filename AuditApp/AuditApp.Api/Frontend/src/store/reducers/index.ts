import { combineReducers } from "redux"
import { todoReducer } from "./todo-reducer";
import { templateHotelReducer } from "./template-hotel-reducer";
import { userReducer } from "./user-reducer";
import { templateCampReducer } from "./template-camp-reducer";

export const rootReducer = combineReducers({
  todo: todoReducer,
  hotelTemplate: templateHotelReducer,
  campTemlpate : templateCampReducer,
  user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>