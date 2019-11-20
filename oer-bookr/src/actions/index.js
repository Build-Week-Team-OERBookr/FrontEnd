// import axiosWithAuth
// import axiosWithAuth from "../utils/axiosWithAuth";

// delete after login and axiosWithAuth is working.
import axios from 'axios';
// Action Types
export const GET_BOOKS_LOADING = 'GET_BOOKS_LOADING';
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
export const GET_BOOKS_FAILURE = 'GET_BOOKS_FAILURE';

export const booksLoading = () => ({ type: GET_BOOKS_LOADING });
export const booksLoadingSuccess = data => ({ type: GET_BOOKS_SUCCESS, payload: data });
export const booksLoadingFailure = error => ({ type: GET_BOOKS_FAILURE, payload: error });

// gets book list
export function getBooks() {
    return function(dispatch) {
        dispatch(booksLoading());
        // return axiosWithAuth()
        return axios
        .get('https://oerbookr.herokuapp.com/api/books')

        .then(res => {
            console.log('getBooks', res) 
        dispatch(booksLoadingSuccess(res.data))}
        )
        .catch(err => dispatch(booksLoadingFailure(), err)
        );
    };
}


// action types
export const POST_NEW_BOOK_POSTING = 'POST_NEW_BOOK_POSTING';
export const POST_NEW_BOOK_SUCCESS = 'POST_NEW_BOOK_SUCCESS';
export const POST_NEW_BOOK_FAILURE = 'POST_NEW_BOOK_POSTING';

export const newBookPosting = () => ({ type: POST_NEW_BOOK_POSTING })
export const newBookSuccess = () => ({ type: POST_NEW_BOOK_SUCCESS })
export const newBookFailure = () => ({ type: POST_NEW_BOOK_FAILURE })

// Allows user to add a new book to the book list
export function postBook(book) {
    console.log(book)
    return function(dispatch) {
        dispatch(newBookPosting());
        // return axiosWithAuth()
        return axios
        .post('https://oerbookr.herokuapp.com/api/books', book)
        .then(res => {console.log('Add a Book', res);
            dispatch(newBookSuccess(res.data))})
        .catch(err => dispatch(newBookFailure(), err)
        );
    }
}

// Allows user to delete book from list
// export const DELETE_BOOK = 'DELETE_BOOK';

// export const deleteBookSuccess = () => ({ type: DELETE_BOOK, payload: book })

// export const deleteBook = book => {
//     return function(dispatch) {
//         dispatch(deleteBookSuccess());
//         // return axiosWithAuth()
//         return axios
//         .delete(`/book/${book.id}`)
//         .then(res => props.history.push('/'))
//         .catch(err => console.log('Book deleted!', err));
//     }
// }

// Allows user to edit book
// export const EDIT_BOOK = 'EDIT_BOOK';

// export const editBookSuccess = () => ({ type: EDIT_BOOK, payload: book })

// export const editBook



// Allows user to submit edited book info

