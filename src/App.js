import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './listBooks'
import SearchBook from './searchBook'
import { Switch, Route } from 'react-router-dom'


class BooksApp extends React.Component {


  state = {
    books : []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

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
            <Route exact path='/' component={props => <ListBooks books={this.state.books} updateShelf={this.selectedOption}/>}/>
            <Route exact path='/search' component={props => <SearchBook books={this.state.books} updateShelf={this.selectedOption}/>}/>
          </Switch>
            {console.log(this.state.books)}
        </div>
      )
  }
}


export default BooksApp
