import axios from "axios"
import {URL_BE} from "react-native-dotenv";

const LoginRequest = () => {
    return {
        type: "LOGIN_REQUEST"
    }
}

const LoginSucces = (data) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: data
    }
}

const LoginError = (error) => {
    return {
        type: "LOGIN_ERROR",
        payload: error
    }
}

export const AuthLogin = (formData) => {
    console.log(formData, 'data di action')
    return async (dispatch) => {
        dispatch(LoginRequest())
        await axios({ 
            method: "POST",
            url: `${URL_BE}/api/v1/auth/login`,
            data: {
                email: formData.email,
                password: formData.password
            }
        })
        .then ((res) => {
            dispatch(LoginSucces(res.data.data))
            console.log(res.data.data, 'masuk nggak datanya')
        })
        .catch((err)=> {
            console.log(err, 'ini error')
            dispatch(LoginError(err.response.data))
        })
    }
}

export const AuthLogout = () => {
    return {
        type: "AUTH_LOGOUT",
    }
}


const RegisterRequest = () => {
    return {
        type: "REGISTER_REQUEST"
    }
}

const RegisterSuccess = (data) => {
    return {
        type: "REGISTER_SUCCESS",
        payload: data
    }
}

const RegisterError = (error) => {
    return {
        type: "REGISTER_ERROR",
        payload: error
    }
}

export const AuthRegister = (formData) => {
    console.log(formData, 'data register di action')
    return async (dispatch) => {
        dispatch(RegisterRequest())
        await axios({
            method: "POST",
            url: `${URL_BE}/api/v1/auth/register`,
            data: {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                phone_number: formData.phone_number,
            }
        })
        .then ((res) => {
            dispatch(RegisterSuccess(res.data))
            console.log(formData, 'ini data form register ')
        })
        .catch((error)=> {
            dispatch(RegisterError(error.response.data))
        })
    }
}