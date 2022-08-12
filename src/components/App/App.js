import './App.css';
import React from 'react';
import FilterBar from '../FilterBar/FilterBar';
import BookList from '../BookList/BookList';
import MyBooks from '../MyBooks/MyBooks';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.allBooks = require('../../data.json');
        this.state = {
            booksList: this.allBooks,
            myBooks: [],
            showAvailable: false
        };
        this.onBookSelect = this.onBookSelect.bind(this);
        this.onBookDelete = this.onBookDelete.bind(this);
        this.onShowAvailable = this.onShowAvailable.bind(this);
    }

    onBookSelect = function (id) {
        //console.log('book is selected ' + id);
        this.setState(function (state, props) {           // for <React.StrictMode> setState is called twice in development
            let book;
            let newList = [];  // new list without seleted item
            for (var i = 0; i < state.booksList.length; i++) {
                if (state.booksList[i].id == id) {
                    book = state.booksList[i];
                    let remainingBook = book;
                    remainingBook.count--;
                    if (remainingBook.count > 0) {
                        newList.push(remainingBook);
                    }
                    continue;
                }
                newList.push(state.booksList[i]);
            }
            let newMyList = state.myBooks.concat([book]);
            return { booksList: newList, myBooks: newMyList };
        });
    }

    onBookDelete = function (id) {
        //array.splice(i, 1);
    }

    onShowAvailable = function () {
        this.setState(function (state, props) {
            let newShowAvalable = !state.showAvailable;
            let newList = [];
            for (var i = 0; i < this.allBooks.length; i++) {
                if (this.allBooks[i].isAvailable === newShowAvalable)
                    newList.push(this.allBooks[i]);
            }

            return {
                showAvailable: newShowAvalable,
                booksList: newList
            };
            
        });
    }

    render() {
        return (
            <div>
                <div className="app-header">
                    <div className="header-item"><img src="open-book.jpg" height="50px" /></div>
                    <div className="header-item header-title">Library</div>
                    <div className="clear-div"></div>
                </div>
                <div className="checkout-popup">
                    <MyBooks books={this.state.myBooks} onBookDelete={this.onBookDelete}></MyBooks>
                </div>
                <FilterBar showAvailable={this.state.showAvailable} onShowAvailable={this.onShowAvailable}></FilterBar>
                <BookList books={this.state.booksList} onBookSelect={this.onBookSelect}></BookList>
            </div>);
    }    
}

export default App;