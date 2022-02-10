import {Todo, TodoActions} from '../../types/todos';
import {TodoActionsType} from '../../types/enums';

interface ITodosState {
    todos: Todo[],
    loading: boolean,
    error: null | string,
    page: string,
    limit: string
}

const initState: ITodosState = {
    todos: [],
    loading: false,
    error: null,
    page: '1',
    limit: '10'
}

export const todoReducer = (state: ITodosState = initState, action: TodoActions): ITodosState => {
    switch (action.type) {
        case TodoActionsType.FETCH_TODOS:
            return {...state, loading: true, error: null}
        case TodoActionsType.FETCH_TODOS_ERROR: 
            return {...state, loading: false, error: action.payload}
        case TodoActionsType.FETCH_TODOS_SUCCESS: 
            return {...state, loading: false, todos: action.payload}
        case TodoActionsType.SET_TODOS_PAGE:
            return {...state, page: action.payload}
        default:
            return state;
    }
}