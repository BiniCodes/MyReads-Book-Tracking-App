import React, {Component} from 'react'
import Book from './books'

class BookShelf extends Component{

	render(){
		//variables
		const books = this.props.books;
		let chooseTitle = this.props.title;
		let chooseShelf = this.props.chooseShelf;

		return(
				<div>
					<div className="bookshelf">
			          <h2 className="bookshelf-title">{ chooseTitle }</h2>
			          <div className="bookshelf-books">
				         	 <ol className="books-grid">
								{/*To display the books on the right shelf: Filter the books array...*/
								books.filter(book => 
								/*... If the shelf of the book from the books array is equal to the value the chooseShelf variable representing the name of the bookshelf in listBooks,
								map through those filtered books and display the books on the right shelf with the Book component*/
									book.shelf === chooseShelf).map(book =>
										<li key={book.id}>
											<Book books={ this.props.books } book={ book } updateShelf={ this.props.updateShelf } chooseShelf = { this.props.chooseShelf }/>
										</li>
									)
								}
				   			</ol>
				        </div>
			        </div>
		        </div>
		)
	}

}

export default BookShelf