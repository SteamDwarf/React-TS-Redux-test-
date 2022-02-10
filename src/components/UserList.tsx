import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import User from './User';

function UserList() {
    const {users, loading, error} = useTypedSelector(state => state.users);
    const {fetchUsers} = useActions();

    useEffect(() => {
        fetchUsers();
    }, []);

    if(loading) {
        return(
            <h1>Список пользователей загружается, подождите...</h1>
        );
    }
    if(error) {
        return(
            <h1>{error}</h1>
        );
    }

    return (
        <div>
            {users.map(user => 
                <User 
                    key={user.id} 
                    name={user.name}
                    email={user.email}
                    phone={user.phone} 
                />
            )}
        </div>
    );
}

export default UserList;
