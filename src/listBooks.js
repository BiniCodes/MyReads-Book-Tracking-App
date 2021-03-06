import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './bookShelf'



class ListBooks extends Component{

	render(){
		return(
			<div className="list-books">
	            <div className="list-books-title">
	              <h1>MyReads</h1>
	            </div>
	            <div className="list-books-content">
	              <div>
	              	{/*Render the different bookshelves components on to the main page given the titles and shelves*/ }
	                <BookShelf books={this.props.books}  updateShelf={this.props.updateShelf} chooseShelf="currentlyReading" title="Currently Reading" />
	                <BookShelf books={this.props.books}  updateShelf={this.props.updateShelf} chooseShelf="wantToRead" title="Want to Read"/>
	                <BookShelf books={this.props.books}  updateShelf={this.props.updateShelf} chooseShelf="read" title="Read"/>
	              </div>
	            </div>
	            <div className="open-search">
	            {/* Link to the search page to look for books*/}
	              <Link to='/search'>Add a book</Link>
	            </div>
	         </div>
		)
	}
}

export default ListBooks