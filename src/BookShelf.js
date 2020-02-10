import React from 'react';

function BookShelf(props) {
    console.log(props.books)
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{width: 128, height: 192}}></div>
              <div className="book-shelf-changer">
                <select>
                  <option disabled>Move to...</option>
                  <option value="currentlyReading">currentlyReading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="read">none</option>
                </select>
              </div>
            </div>
            <div className="book-title">The Adventures of Tom Sawyer</div>
            <div className="book-authors">Mark Twain</div>
          </div>
        </li>
      </ol>
    </div> 
) 
}

export default BookShelf;