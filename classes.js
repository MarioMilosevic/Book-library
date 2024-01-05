"use strict";

export class Book {
  constructor(title, author, number) {
    this.title = title;
    this.author = author;
    this.number = number;
  }
}

export class BookManager {
  constructor() {
    this.bookCollection = [];
  }
  addBook(book) {
    this.bookCollection.push(book);
  }
  getBooks(){
    return this.bookCollection
  }
}

export class UI {}
