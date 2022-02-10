import { TodoActionsType } from "./enums"

export type Todo = {
    id: number,
    title: string,
    completed: boolean
}

interface IFetchTodosAction {
    type: TodoActionsType.FETCH_TODOS
}
interface IFetchTodosSuccessAction {
    type: TodoActionsType.FETCH_TODOS_SUCCESS,
    payload: Todo[]
}
interface IFetchTodosErrorAction {
    type: TodoActionsType.FETCH_TODOS_ERROR,
    payload: string
}
interface ISetTodosPageAction {
    type: TodoActionsType.SET_TODOS_PAGE,
    payload: string
}

export type TodoActions = IFetchTodosAction |
                            IFetchTodosSuccessAction |
                            IFetchTodosErrorAction |
                            ISetTodosPageAction;