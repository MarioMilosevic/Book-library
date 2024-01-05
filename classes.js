"use strict";

export class Book {
  constructor(title, author, number, read) {
    this.title = title;
    this.author = author;
    this.number = number;
    this.id = Math.random() * 1000;
    this.read = read
  }
}

export class BookManager {
  constructor() {
    this.bookArr = [];
  }
  add(book) {
    this.bookArr.push(book);
  }
  getBooks() {
    return this.bookArr;
  }

  remove(bookId) {
    this.bookArr = this.bookArr.filter(
      (book) => book.id !== bookId
    );
  }

}

export class UI {
  constructor() {}

  addBook(parent, child){
    parent.appendChild(child)
  }

  removeBook(el){
    el.remove()
  }
}
