"use strict";

export class Book {
  constructor(title, author, number) {
    this.title = title;
    this.author = author;
    this.number = number;
    this.id = Math.random() * 1000;
  }
}

export class BookManager {
  constructor() {
    this.bookCollection = [];
  }
  add(book) {
    this.bookCollection.push(book);
  }
  getBooks() {
    return this.bookCollection;
  }

  remove(bookId) {
    console.log(bookId);
    const bookIdNumber = Number(bookId);
    this.bookCollection = this.bookCollection.filter(
      (book) => book.id !== bookIdNumber
    );
  }

  //   remove(carId) {
  //     // this.setCustomArr();
  //     const carIdNumber = Number(carId);
  //     this.customArr = this.customArr.filter((el) => el.id !== carIdNumber);
  //   }
}

export class UI {
  constructor() {}

  addBookUI(parent, child){
    parent.appendChild(child)
  }
}
