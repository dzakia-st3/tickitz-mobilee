import { type } from "@testing-library/user-event/dist/type"
import axios from "axios"
import {URL_BE} from "react-native-dotenv";

const GetMoviesRequest = () => {
    return {
        type: "GET_MOVIES_REQUEST"
    }
}

const GetMoviesSucces = (data) => {
    return {
        type: "GET_MOVIES_SUCCESS",
        payload: data
    }
}

const GetMoviesError = (error) => {
    return {
        type: "GET_MOVIES_ERROR",
        payload: error
    }
}

export const GetMovies = (params) => {
    // let page = params?.page ?? 1
    // let limit = params?.limit ?? 5

    const {title, page, limit} = (params)

    return (dispatch) => {
    dispatch(GetMoviesRequest())
        axios({
            method: "GET",
            url: `${URL_BE}/api/v1/movie?${title ? `title=${title}`:``}${page ? `&page=${page}`:``}${limit ? `&limit=${limit}`:``}`,
        })
        .then ((res) => {
            dispatch (GetMoviesSucces(res.data.data))
        })
        .catch((err)=> {
            dispatch(GetMoviesError(err.response))
        })
    }
}

