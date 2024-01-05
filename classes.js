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
    console.log('id koji proslijedim u remove',bookId);
    this.bookArr = this.bookArr.filter(
      (book) => book.id !== bookId
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

  addBook(parent, child){
    parent.appendChild(child)
  }

  removeBook(el){
    el.remove()
  }
}
