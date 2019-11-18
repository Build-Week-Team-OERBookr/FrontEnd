// action type imports
import {
    GET_BOOKS_LOADING, GET_BOOKS_SUCCESS,
    GET_BOOKS_FAILURE, POST_NEW_BOOK_POSTING,
    POST_NEW_BOOK_SUCCESS, POST_NEW_BOOK_FAILURE
} from '../actions';


const initialState = {
    books: [],
    error: null,
    isFetching: false
};

function reducer(state = initialState, action){
    switch(action.type) {
        case GET_BOOKS_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case GET_BOOKS_SUCCESS:
            return {
                ...state,
                books: action.payload,
                isFetching: false,
                error: null
            };
        case GET_BOOKS_FAILURE:
            return {
                ...state,
                books: [],
                isFetching: false,
                error: action.payload
            };
        case POST_NEW_BOOK_POSTING:
            return {
                ...state,
                isFetching: true, 
                error: null,
                books: []
            };
        case POST_NEW_BOOK_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                books: action.payload
            };
        case POST_NEW_BOOK_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
                books: []
            };
        default:
            return state;
    }
}

export default reducer