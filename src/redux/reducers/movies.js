const initialState = {
    loading: false,
    data: {
        result: [],
        page: "0",
        limit: "0",
        totalRows: 0,
        totalPage: 0
    },
    result: []
}

const Fetch = (state=initialState, action={}) => {
    switch (action.type) {
        case "GET_MOVIES_REQUEST":
            return {...state, loading: true}
        case "GET_MOVIES_ERROR":
            return {...state, loading: false, data:state.data, error:action.payload}
        case "GET_MOVIES_SUCCESS":
            return {...state, loading: false, data:action.payload, error:null}                  
        default:
            return state
    }
}

export default Fetch