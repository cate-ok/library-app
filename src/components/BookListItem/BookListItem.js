import './BookListItem.css';
import imgBook from '../../images/red-book.jpg';

function BookListItem(props) {

    let imageSrc;
    try {
        imageSrc = require("../../images/" + props.book.image).default;
    } catch(ex) {
        imageSrc = imgBook;
    }

    function onSelect() {
        props.onSelect(props.book.id);
    }

    return (
        <div className="book-list-item">
            <img className="img-icon" src={imageSrc} />
            <div className="book-info">
                <div className="book-title">{props.book.title}</div>
                <div>{props.book.author}</div>
                <div><span>{props.book.count}</span> <span>{props.book.count == 1 ? "copy" : "copies"}</span></div>
            </div>
            <button onClick={onSelect}>Select</button>
        </div>
    );
}

export default BookListItem;