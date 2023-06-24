import axios from "axios";
import { UserAction, UserActionTypes } from "../../types/user"
import {Dispatch}  from "redux";
import { TodoAction, TodoActionTypes } from "../../types/todo";
import { type } from "os";


export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({type: TodoActionTypes.FETCH_TODOS})
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
        params: {_page: page, _litim: limit}
      })
      setTimeout( () => dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data}) , 500)
    } catch (e) {
      dispatch({type: TodoActionTypes.FETCH_TODOS_ERROR, payload: "Произошла ошибка при загрузке списка дел"})
    }
  }
}

export function setTodoPage(page: number) : TodoAction {
  return {type: TodoActionTypes.FETCH_TODOS_PAGE, payload: page}
} 