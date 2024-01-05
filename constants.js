"use strict";

export function data() {
  const books = document.querySelector(".books");
  const newBtn = document.querySelector(".newBtn");
  const submitBtn = document.querySelector(".submitBtn");
  const overlay = document.querySelector(".overlay");
  const modal = document.querySelector(".modal");
  const exitModalBtn = document.querySelector('.exitModal')
    const titleInput = document.querySelector('#title')
    const authorInput = document.querySelector('#author')
    const pageNumInput = document.querySelector('#pageNumbers')
    const inputCheckBox = document.querySelector('.checkBox')
  return {
    newBtn,
    exitModalBtn,
    modal,
    overlay,
    books,
    submitBtn,
    titleInput,
    authorInput,
    pageNumInput,
    inputCheckBox
  };
}
