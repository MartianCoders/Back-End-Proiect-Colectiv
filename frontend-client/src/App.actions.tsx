import { AppStateType } from "./reducers/app"
import axios from "axios";
import { backend_url } from "./utils/utils";
import { IUser } from "./interfaces/user";

export default class AppActions {
    static setUserStatus = (isLoggedIn:boolean,isAdmin:boolean) => (dispatch:any) => {
        dispatch({
            type: AppStateType.SET_USER_STATUS,
            payload: {
                isLoggedIn,
                isAdmin,
            },
        });
    };

    static setCurrentUser = (currentUser:any) => (dispatch:any) => {
        dispatch({
            type: AppStateType.SET_CURRENT_USER,
            payload: {
                currentUser
            },
        });
    };
    
    static login = (username:any,password:any) => (dispatch:any) => {
        // const headers = {
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Credentials": "true",
        // "Access-Control-Allow-Headers": "Content-Type, Authorization, x-id,Content-Length, X-Requested-With",
        // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
        // }

        console.log(username,password)

        axios.post(`${backend_url}/api/auth/login`,{
            username,
            password
        })
        .then((response) => {
            const userData = response.data;
            if(userData.token.length !== 0){
                localStorage.setItem("token",userData.token);
                localStorage.setItem("secondsSpent","0");

                const currentUser:IUser = userData.user;

                dispatch({
                    type: AppStateType.SET_CURRENT_USER,
                    payload:{
                        currentUser,
                    },
                });

                AppActions.setUserStatus(true,currentUser.category === 2)(dispatch);
            }
            else {
                alert("Invalid credentials or blank fields !");
            }
        })
        .catch((err)=>{
            // alert(err);
        });
    };

    static logout = (dispatch:any) => {

        const headers = {
            'Authorization': `Token ${localStorage.getItem('token')}`
        }

        axios.post(`${backend_url}/api/auth/logout`,{},{
            headers: headers
        })
        .then((response) => alert("Logged out successfully !"))
        .catch((err) => alert(err))

        AppActions.setUserStatus(false,false)(dispatch);
        AppActions.setCurrentUser({})(dispatch);

    }

    static register = (user:any) => (dispatch:any) => {

        const {username,email,password,category} = user;

        axios.post(`${backend_url}/api/auth/register`,{
            username: username,
            email: email,
            password: password,
            category: category
        })
        .then((response) => {
            const userData = response.data;
            if(userData.token.length !== 0){
                const currentUser:IUser = userData.user;


                AppActions.login(user.username,user.password)(dispatch);
            }
            else if(userData.username.length !== 0) {
                alert(userData.username[0]);
            } else if(userData.email.length !== 0) {
                alert(userData.email[0]);
            }
            else if(userData.password.length !== 0) {
                alert(userData.password[0]);
            }
            else {
                alert("Something went wrong with your registration");
            }
        })
        .catch((err)=>{
            alert("Something went wrong with your registration");
        });
    };


}