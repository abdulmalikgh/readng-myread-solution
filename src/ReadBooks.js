import React from 'react';
import BookShelf from './BookShelf';

function ReadBooks(props) {
 return (
    <div className="bookshelf">
    <h2 className="bookshelf-title">Read</h2>
    <div className="bookshelf-books">
       <BookShelf books={props.books} handleChange={props.handleChange} />
    </div> 
    </div>
 )
}

export default ReadBooks;