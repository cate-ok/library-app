import './BookList.css';
import BookListItem from '../BookListItem/BookListItem';

function BookList(props) {

    let booksList = props.books.map(b =>
        <BookListItem key={b.id} book={b} onSelect={()=> props.onBookSelect(b.id)}></BookListItem>
    );

    return (
        <div className="book-list">
            <div className="book-list-cont">{booksList}</div>
        </div>
    )
}

export default BookList;