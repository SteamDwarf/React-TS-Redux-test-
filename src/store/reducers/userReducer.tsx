import {UserActionsType} from '../../types/enums';
import {UserActions} from '../../types/users';

interface IUserState {
    users: any[],
    loading: boolean,
    error: null | string
};
const initState: IUserState = {
    users: [],
    loading: false,
    error: null
};

export const userReducer = (state = initState, action: UserActions): IUserState => {
    switch (action.type) {
        case UserActionsType.FETCH_USERS:
            return {users: [], loading: true, error: null};
        case UserActionsType.FETCH_USERS_ERROR:
            return {users: [], loading: false, error: action.payload};
        case UserActionsType.FETCH_USERS_SUCCESS:
            return {users: action.payload, loading: false, error: null};
        default:
            return state;
    }
};