import { UserActionsType } from "../../types/enums";
import { UserActions } from "../../types/users";
import { IFetchUsers, IFetchUsersError, IFetchUsersSuccess } from "../../types/users";
import { Dispatch } from "react";


const fetchUsersAction = (): IFetchUsers => ({type: UserActionsType.FETCH_USERS});
const fetchUsersSuccessAction = (payload: any[]): IFetchUsersSuccess => ({type: UserActionsType.FETCH_USERS_SUCCESS, payload: payload});
const fetchUsersErrorAction = (payload: string): IFetchUsersError => ({type: UserActionsType.FETCH_USERS_ERROR, payload: payload});

export const fetchUsers = () => {
    return function (dispatch: Dispatch<UserActions>) {
        dispatch(fetchUsersAction());
        
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.ok ? response.json() : Promise.reject(response))
            .then(json => dispatch(fetchUsersSuccessAction(json)))
            .catch(() => dispatch(fetchUsersErrorAction("Произошла ошибка при попытке получить данные с сервера")));
    }
}