import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './listBooks'
import SearchBook from './searchBook'
import { Switch, Route } from 'react-router-dom'


class BooksApp extends React.Component {

// Set the state for the books array as empty
  state = {
    books : []
  }

  /*Get the books from the Books API with getAll() function when the componente did mount and load the books into the books
  array with setState after getting the response*/
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

//Function to update the books in the bookshelves
  selectedOption = (book, shelf) => {
    BooksAPI.update(book, shelf)

    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

   render() {
      return (
        <div className="app">

          <Switch>
             {/*Display the books in the booksshelves on the main page with the ListBooks component*/}
            <Route exact path='/' component={props => <ListBooks books={this.state.books} updateShelf={this.selectedOption}/>}/>
             {/*Display the books on the search page with the SearchBook component*/}
            <Route exact path='/search' component={props => <SearchBook books={this.state.books} updateShelf={this.selectedOption}/>}/>
          </Switch>
        </div>
      )
  }
}


export default BooksApp
