import React ,{ Component } from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';

class  App extends Component{
  state = {
    books: [],
  }
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState( ()=>({
        books
      }))
    })
  }
  render(){
   const read = this.state.books.filter( book => book.shelf === 'read');
   const wantToRead = this.state.books.filter( book => book.shelf === 'wantToRead');
   const currentlyReading = this.state.books.filter(book => book.shelf === 'currentlyReading')
   
    return(
      <div className='app'>
        <div className='list-books'>
          <div className='list-books-title'>
            <h1>MyReads</h1>
          </div>
          <div className='list-books-content'>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    )  
  }
}

export default App;
