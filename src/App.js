import React ,{ Component } from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import ReadBooks from './ReadBooks';
import WantToReadBooks from './WantToReadBooks';
import CurrentlyReadBooks from './CurrentlyReadBooks';
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
  handleChange = bookId => event => {
    const option = event.target.value;
     if(option === 'none') {
       return
     }
  
     this.setState( prevState => {
      const updatedBooks = prevState.books.map( book => {
        if(book.id === bookId) {
          BooksAPI.update(book,option)
          book.shelf = option;
        }
        return book
      })
      return {
        books:updatedBooks
      }
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
              <CurrentlyReadBooks books={currentlyReading} handleChange={this.handleChange}/>
              <WantToReadBooks books={wantToRead} />
              <ReadBooks books={read} />
            </div>
          </div>
        </div>
      </div>
    )  
  }
}

export default App;
