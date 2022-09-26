import { combineReducers } from "redux"
import Auth from './auth'
import Movies from './movies'
import AuthRegister from "./authRegister"

const rootReducer = combineReducers ({
    auth: Auth,
    authRegister: AuthRegister,
    movie: Movies
})

export default rootReducer

