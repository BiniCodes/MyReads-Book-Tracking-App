import React, {Component} from 'react'
import Book from './books'

class BookShelf extends Component{

	render(){
		const books = this.props.books;
		let chooseTitle = this.props.title;
		let chooseShelf = this.props.chooseShelf;

		return(
				<div>
					<div className="bookshelf">
			          <h2 className="bookshelf-title">{ chooseTitle }</h2>
			          <div className="bookshelf-books">
				         	 <ol className="books-grid">
								{
								books.filter(book => 
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