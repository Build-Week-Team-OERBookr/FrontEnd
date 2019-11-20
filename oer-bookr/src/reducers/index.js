// action type imports
import {
    GET_BOOKS_LOADING, GET_BOOKS_SUCCESS,
    GET_BOOKS_FAILURE, POST_NEW_BOOK_POSTING,
    POST_NEW_BOOK_SUCCESS, POST_NEW_BOOK_FAILURE,
    DELETE_BOOK, 
    // EDIT_BOOK
} from '../actions';


const initialState = {
    books: [],
    error: null,
    isFetching: false,
    isEditing: false
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
                book: action.payload
            };
        case POST_NEW_BOOK_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
                books: []
            };
        case DELETE_BOOK:
            return {
                ...state,
                books: [ state.books.filter(book => book.id !== action.payload)] 
            };
        // case EDIT_BOOK:
        //     return {
        //         ...state,
        //         books: {
        //             ...state.map(book => book.id === action.payload.id ? {...book, isEditing: !book.isEditing} : book )
        //         }
        //     }
        default:
            return state;
    }
}

export default reducer