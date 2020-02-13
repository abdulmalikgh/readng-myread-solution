import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';


class SearchBooks extends Component {
   state = {
      query: ''
   }
 updateQuery(query) {
   this.setState({query})
   this.props.searchBooks(query)
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
        <BookShelf books={updatedBooks} handleChange={this.props.handleChange} />
        </div>
      </div>
      )
    }
}

export default SearchBooks;