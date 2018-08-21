import React, {Component} from 'react'

class Book extends Component{

	render(){
		return (
			<div>
				<div className="book">
		          <div className="book-top">
		          {/*Add the conditional operator to the url to ensure the image of the book is loading, in case there is none, no image will be displayed*/}
		            <div className="book-cover" style={{ 
		            	width: 128, height: 193, backgroundImage: `url(${ 
		            	this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''})` 
			            }}></div>
			            <div className="book-shelf-changer">
			            {/*Set the value of select to chooseShelf to display the current shelf of the book.
			            Update the shelf when an event occurs with the updateShelf function of Booksapp Component*/ }
			              <select value= {this.props.chooseShelf} onChange={(e) => this.props.updateShelf(
							this.props.book, e.target.value
			              	)}>
			                <option value="move" disabled>Move to...</option>
			                <option value="currentlyReading">Currently Reading</option>
			                <option value="wantToRead">Want to Read</option>
			                <option value="read">Read</option>
			                <option value="none">None</option>
			              </select>
			            </div>
			          </div>
		          <div className="book-title">{this.props.book.title}</div>
		          <div className="book-authors">{this.props.book.authors}</div>
		        </div>
		    </div>    
		)
	}
}


export default Book