import MyBooksItem from '../MyBooksItem/MyBooksItem';
import './MyBooks.css';

function MyBooks(props) {

    const myBooks = props.books.map(b =>
        <MyBooksItem key={b.id} book={b} onDelete={() => props.onBookDelete(b.id)}></MyBooksItem>
        );

    return (
        <div>{myBooks}</div>
    );
}

export default MyBooks;