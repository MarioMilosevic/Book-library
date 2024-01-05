"use strict";
import { data } from "./constants";
import { toggleClass } from "./helpers";
import { Book, BookManager, UI } from "./classes";
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
  inputCheckBox,
} = data();

const newExitBtns = [newBtn, exitModalBtn];
const bookMan = new BookManager();
const domUI = new UI();

newExitBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    toggleClass([modal, overlay], "hidden");
    if (!modal.classList.contains("hidden")) {
      titleInput.focus();
    }
  })
);

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    titleInput.value !== "" &&
    authorInput.value !== "" &&
    pageNumInput.value >= 1
  ) {
    const book = new Book(
      titleInput.value,
      authorInput.value,
      pageNumInput.value,
      inputCheckBox.checked
    );

    bookMan.add(book);
    titleInput.value = "";
    authorInput.value = "";
    pageNumInput.value = "";
    toggleClass([modal, overlay], "hidden");
    createBook(book);
  }
});

const createBook = (el) => {
  const { title, author, number, read } = el;
  const book = document.createElement("div");
  book.innerHTML = "";
  book.innerHTML = `<div class="book">
        <p class="bookTitle">${title}</p>
        <p class="bookAuthorName">${author}</p>
        <p class="bookNumPages">${number} pages</p>
        <div class="bookButtons">
        <button class="read">${read ? "Read ✅" : "Not read ❌"}</button>
        <button class="removeBook">Delete</button>
        </div>
    </div>`;
  domUI.addBook(books, book);

  const removeBtn = book.querySelector(".removeBook");
  const readBtn = book.querySelector(".read");

  removeBtn.addEventListener("click", function () {
    bookMan.remove(el.id);
    domUI.removeBook(removeBtn.parentElement.parentElement.parentElement);
  });

  readBtn.addEventListener("click", function () {
    el.setReadState(el.read);
    el.read ? readBtn.textContent = 'Read ✅' : readBtn.textContent = 'Not read ❌'
  });
};
