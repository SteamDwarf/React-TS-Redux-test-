import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector'
import { Todo } from '../types/todos'

const TodoList = () => {
    const {todos, loading, error, page, limit} = useTypedSelector(state => state.todos);
    const {fetchTodos, setTodosPageAction} = useActions();
    const pages: string[] = ['1', '2', '3', '4', '5'];
    
    useEffect(() => {
        fetchTodos(page, limit);
    }, [page]);

    if(loading) {
        return (<h1>Список дел загружается, подождите...</h1>)
    }
    if (error) {
        return (<h1>error</h1>)
    }

    return (
        <div>
            {todos.map(todo =>
                <div>{todo.id} - {todo.title}</div>
            )}
            <div style={{display: 'flex', width: '200px', justifyContent: 'space-between'}}>
                {pages.map(page => 
                    <h3 
                        style={{border: '1px solid', width: '25px', textAlign: 'center', cursor: 'pointer'}}
                        onClick={() => setTodosPageAction(page)}
                    >
                        {page}
                    </h3>
                )}
            </div>
        </div>
    )
}

export default TodoList