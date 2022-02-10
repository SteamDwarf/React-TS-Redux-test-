import { Todo, TodoActions } from "../../types/todos";
import { TodoActionsType } from "../../types/enums";
import { Dispatch } from "react";

const fetchTodosAction = (): TodoActions => ({
    type: TodoActionsType.FETCH_TODOS
});
const fetchTodosSuccessAction = (todos: Todo[]): TodoActions => ({
    type: TodoActionsType.FETCH_TODOS_SUCCESS,
    payload: todos
});
const fetchTodosErrorAction = (error: string): TodoActions => ({
    type: TodoActionsType.FETCH_TODOS_ERROR,
    payload: error
});

export const setTodosPageAction = (page: string): TodoActions => ({
    type: TodoActionsType.SET_TODOS_PAGE,
    payload: page
});

export const fetchTodos = (page: string, limit: string) => {
    return function(dispatch: Dispatch<TodoActions>) {
        dispatch(fetchTodosAction());
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(json => dispatch(fetchTodosSuccessAction(json)))
            .catch(() => dispatch(fetchTodosErrorAction("При загрузке списка дел произошла ошибка")));
    }
}