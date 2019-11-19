// import axiosWithAuth
import axiosWithAuth from "../utils/axiosWithAuth";

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
        return axiosWithAuth()
        .get('/books')
        .then(res => dispatch(booksLoadingSuccess(res.data)))
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

// allows you to add a new book to the book list
export function postBook(book) {
    return function(dispatch) {
        dispatch(newBookPosting());
        return axiosWithAuth()
        .post('/books', book)
        .then(res => dispatch(newBookSuccess()))
        .catch(err => dispatch(newBookFailure(), err)
        );
    }
}

// const DELETE_BOOK = 'DELETE_BOOK';

// export const deleteBookSuccess = () => ({ type: DELETE_BOOK })

// export const deleteBook = () => {
//     return function(dispatch) {
//         dispatch(deleteBookSuccess());
//         return asioxWithAuth()
//         .delete(`/books/${state.book.id}`)
//         .then(res => props.history.push('/'))
//         .catch(err => console.log('Book deleted!', err));
//     }
// }

