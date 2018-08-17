import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksApp from './App'
import Book from './books'

class SearchBook extends Component{

	state = {
		searchBook: [],
		query: '' 
	}

	updateQuery = (query) => {
		this.setState({query : query})

		//Changes made to if else statement after seeing the following study jam: https://www.youtube.com/watch?v=i6L2jLHV9j8&feature=youtu.be
		if(query){
			BooksAPI.search(query).then((searchBook) => {
				if(searchBook.error) {
					this.setState({ searchBook: [] });
				} else {
			      this.setState({ searchBook })	
				}		
			})
		} else {
		 this.setState({ searchBook: [] });}
	}



	render(){
		return(
			<div className="search-books">
	            <div className="search-books-bar">
	              <Link to='/' className="close-search">Close</Link>
	              <div className="search-books-input-wrapper">

	                <input 
	                type="text" 
	                placeholder="Search by title or author"
	                value={this.state.query}
	                onChange={(e) => this.updateQuery(e.target.value)}
	                />

	              </div>
	            </div>
	            <div className="search-books-results">
	              <ol className="books-grid">{ 
						this.state.searchBook.map( searchedBook => (
			              	<li key={searchedBook.id} >
								<Book  book={ searchedBook } chooseShelf="none" updateShelf={this.props.updateShelf}/>
							</li>
						))
		              }
	              </ol>
	            </div>
	          </div>
		)
	}
}

export default SearchBook