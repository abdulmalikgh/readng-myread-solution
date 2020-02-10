import React from 'react';
import BookShelf from './BookShelf'
function ReadBooks(props) {
 return (
    <div className="bookshelf">
    <h2 className="bookshelf-title">Read</h2>
      <BookShelf books={props.books} />
    </div>
 )
}

export default ReadBooks;