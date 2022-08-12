import './MyBooksItem.css';
import imgBook from '../../images/red-book.jpg';

function MyBooksItem(props) {
    let imageSrc;
    try {
        imageSrc = require("../../images/" + props.book.image).default;
    } catch (ex) {
        imageSrc = imgBook;
    }

    function onDelete() {
        props.onDelete(props.book.id);
    }

    return (
        <div className="my-books-item">
            <img className="img-icon" src={imageSrc} />
            <div className="book-info">
                <div className="book-title">{props.book.title}</div>
                <span>{props.book.author}</span>
               {/* <span className="book-count-info">{props.book.count}</span>*/}
            </div>            
            <button className="delete-btn" onClick={onDelete}></button>
        </div>
    );
}

export default MyBooksItem;