"use strict";
import { data } from "./constants";
import { toggleClass } from "./helpers";
import { Book,BookManager,UI } from "./classes";
const {
  newBtn,
  modal,
  overlay,
  books,
  submitBtn,
  exitModalBtn,
  titleInput,
  authorInput,
  pageNumInput,
} = data();

const newExitBtns = [newBtn, exitModalBtn];
const bookMan = new BookManager()

newExitBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    toggleClass([modal, overlay], "hidden");
    if (!modal.classList.contains("hidden")) {
      titleInput.focus();
    }
  })
);

submitBtn.addEventListener("click", function (e) {
  e.preventDefault()
  if(titleInput.value !== '' && authorInput.value !== '' && pageNumInput.value !== ''){
    const book = new Book(titleInput.value, authorInput.value, pageNumInput.value)
    bookMan.addBook(book)
    titleInput.value = ''
    authorInput.value = ''
    pageNumInput.value = ''
    console.log(book);
    console.log(bookMan.getBooks());
    toggleClass([modal, overlay], "hidden");
    createBook(book)
  }



});

const createBook = (el) => {
  const {title, author, number} = el
  console.log(title);
  console.log(author);
  console.log(number);
  console.log(el);
  const book = document.createElement("div");
  book.innerHTML = "";
  book.innerHTML = `<div class="book">
        <p class="bookTitle">${title}</p>
        <p class="bookAuthorName">${author}</p>
        <p class="bookNumPages">${number} pages</p>
        <div class="bookButtons">
        <button class="read">Read ✅</button>
        <button class="removeBook">Delete </button>
        </div>
    </div>`;
  books.appendChild(book);
};


