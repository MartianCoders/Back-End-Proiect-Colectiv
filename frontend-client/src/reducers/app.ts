import { Email } from "@material-ui/icons";
import { IUser } from "../interfaces/user";
import { UserType } from "../utils/commonDefinitions";

export interface IAppState {
    currentUser: IUser,
    isLoggedIn: boolean,
    isAdmin: boolean,
}

export enum AppStateType {
    SET_CURRENT_USER = "SET_CURRENT_USER",
    SET_USER_STATUS = "SET_USER_STATUS",
}

const reducer = (state: IAppState = {
    currentUser: {
        id:0,
        username:"",
        email:"",
        category:2,
        // token:""
    },
    isLoggedIn:false,
    isAdmin:false
},action:any) => {
    const {type,payload} = action;

    switch(type) {
        case AppStateType.SET_CURRENT_USER: {
            return {...state ,currentUser: payload.currentUser}
        }
        case AppStateType.SET_USER_STATUS: {
            return {...state,isLoggedIn:payload.isLoggedIn,isAdmin:payload.isAdmin}
        }
        default:
            return state;
    }
}

export default reducer;
