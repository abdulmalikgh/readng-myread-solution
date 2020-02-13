import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SearchBooks extends Component {
   state = {
      query: ''
   }
 updateQuery(query) {
   this.setState({query:query})
   this.props.searchBooks(this.state.query)
 }
   
   
  
    render() {
      const { searchResults, books} = this.props;
      const updatedBooks = searchResults.map( book => {
       books.map(b => {
         if(b.id === book.id) {
           book.shelf = b.shelf
         }
         return b;
       });
       return book;
      })
      return (
        <div className="search-books">
        <div className="search-books-bar">
           <Link to='/'><button className="close-search" onClick={this.props.resetBooks}>Close</button></Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
            value={this.state.query} onChange = { (event)=> {this.updateQuery(event.target.value)}}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {updatedBooks.map( book => (
            <li key={book.id}>
              <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{width: 128, height: 192 , backgroundImage:`url(${book.imageLinks && book.imageLinks.thumbnail})`}}></div>
                <div className="book-shelf-changer">
                  <select value={book.shelf?book.shelf : 'none'} onChange={this.props.handleChange(book)}>
                    <option disabled>Move to...</option>
                    <option value="currentlyReading">currentlyReading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">none</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors && book.authors.join(',')}</div>
           </div>
           </li>
          ))}
          </ol>
        </div>
      </div>
      )
    }
}

export default SearchBooks;