import {UserActionsType} from './enums';

export interface IFetchUsers {
    type: UserActionsType.FETCH_USERS,
}
export interface IFetchUsersSuccess {
    type: UserActionsType.FETCH_USERS_SUCCESS,
    payload: any[];
}
export interface IFetchUsersError {
    type: UserActionsType.FETCH_USERS_ERROR,
    payload: null | string;
}

export type UserActions = IFetchUsers | IFetchUsersSuccess | IFetchUsersError;
