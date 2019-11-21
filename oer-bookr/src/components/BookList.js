import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// react-redux imports
import { connect } from 'react-redux';
// action import
import { getBooks } from '../actions';
// component imports
import AddBookForm from './AddBookForm';
import BookCard from './BookCard';
// import SearchBar from './SearchBar';


const BookList = props => {
console.log('booklist', props)
    
    useEffect(() => {
        props.getBooks();
        console.log('inside hook', props.books)
    }, [])

    return (
        <>
           {props.isFetching && <h3>Books Coming Soon!</h3>}
           {props.error && <div>{props.error.message}</div>}
           <AddBookForm />
           <div className='Book' >
           {props.books && props.books.map((book, id) => (
                <BookCard key={id} book={book} />
            ))} 
           </div>
        </>
    )
}


const mapStateToProps=state => {
    console.log('mSTP', state)
    return {
        books: state.books
    }
}
export default connect(mapStateToProps, {getBooks})(BookList);