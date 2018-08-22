import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './books'

class SearchBook extends Component{
/*Set the state for the searchpage: empty searchBook array as a container for the searched books, the empty query for the query in the input field
and the variable chooseshelf representing the default value for the selection of a shelf*/
	state = {
		searchBook: [],
		query: '',
		chooseShelf:'none'
	}
//updateQuery function for updating the query while typing in the input field
	updateQuery = (query) => {
		this.setState({query})

		//Changes made to if else statement after seeing the following study jam: https://www.youtube.com/watch?v=i6L2jLHV9j8&feature=youtu.be
		
		/*What happens while typing in input field (if there is a query):
		If there is a query use the search query function of the BooksAPI to search for the book(s) matching the query
		When receiving the response...*/
		if(query){
			BooksAPI.search(query).then((searchBook) => {
				//...We check if any error occurs. In case there is an error we leave the searchBook array empty
				if(searchBook.error) {
					this.setState({ searchBook: [] });
				} else {
					//In case there is no error we firstly set the shelf of the searchedbooks to the right selected shelf
					//Therefore we need to map through the searchBook array
					searchBook.map(searchedBook => {
						//The default value is set in the state to 'none'
						searchedBook.shelf = this.state.chooseShelf;
						// Loop through the books array and compare each book(id) with the searched book (id)...
						this.props.books.forEach(book => (
						//...to check if one of the searched books is already attached to a shelf on the main page
							book.id === searchedBook.id ?
							//in case they have the same id, set the shelf of the searched book equal to the shelf of the book on the main page
								searchedBook.shelf = book.shelf : ''
							));
						//return the edited searchedBook...
					return searchedBook; 
				})
					//set the state of the empty searchBook array euqal to the response searchBook 
			      this.setState({ searchBook });	
				}		
			})
		} else {
		//If there is no query in the input field leave the searchBook array of the state empty
		 this.setState({ searchBook: null });}
	}




	render(){

		return(
			<div className="search-books">
	            <div className="search-books-bar">
	              <Link to='/' className="close-search">Close</Link>
	              <div className="search-books-input-wrapper">
					{/*Value of the input field is equal to this.state.query and can be updated with the updateQuery function when an event occurs*/}
	                <input 
	                type="text" 
	                placeholder="Search by title or author"
	                value={this.state.query}
	                onChange={(e) => this.updateQuery(e.target.value)}
	                />

	              </div>
	            </div>
	            <div className="search-books-results">
	              <ol className="books-grid">
	              	{ 
	              		//Map through the existing searchBook array and return a Book component for each book inside of searchBook
						(this.state.searchBook != null) ?
						this.state.searchBook.map( searchedBook =>  
			              	<li key={searchedBook.id} >
								<Book  book={ searchedBook } chooseShelf= { searchedBook.shelf } updateShelf={this.props.updateShelf}/>
							</li>
						) : ''
					}
	              </ol>
	            </div>
	          </div>
		)
	}
}

export default SearchBook