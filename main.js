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
  inputCheckBox
} = data();

const newExitBtns = [newBtn, exitModalBtn];
const bookMan = new BookManager();
const domUI = new UI()

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
  console.log(inputCheckBox.checked)
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
    console.log('book',book);
    console.log('bookArr',bookMan.getBooks());
    toggleClass([modal, overlay], "hidden");
    createBook(book);
  }
});

// <button class="read">${checked === 'on' ? 'Read ✅' : 'Not read ❌'}</button>


const createBook = (el) => {
  const { title, author, number, read } = el;
  console.log(read);
  const book = document.createElement("div");
  book.innerHTML = "";
  book.innerHTML = `<div class="book">
        <p class="bookTitle">${title}</p>
        <p class="bookAuthorName">${author}</p>
        <p class="bookNumPages">${number} pages</p>
        <div class="bookButtons">
        <button class="read">${read ? 'Read ✅' : 'Not read ❌'}</button>
        <button class="removeBook">Delete</button>
        </div>
    </div>`;
    domUI.addBook(books,book)
  // books.appendChild(book);

  const removeBtn = book.querySelector(".removeBook");
  const readBtn = document.querySelector('.read')

 removeBtn.addEventListener('click', function(){
  console.log('removeBtn');
  console.log(el.id);
  bookMan.remove(el.id)
  console.log(removeBtn.parentElement.parentElement);
  console.dir(removeBtn.parentElement.parentElement);
  domUI.removeBook(removeBtn.parentElement.parentElement.parentElement)
  console.log(bookMan.getBooks());
 })



  // removeBtns.forEach((btn) => {
  //   console.log('-----------------------------------------------------');
  //   btn.addEventListener("click", function (e) {
  //     console.log('luuuuup-----------------------------------------------------');
  //     console.log('element',el);
  //     console.log('event',e);
  //     // console.log(btn.parentElement.parentElement);
  //     bookMan.remove(el.id);
  //     domUI.removeBook(btn.parentElement.parentElement)
  //     console.log('bookArr posle brisanja',bookMan.getBooks());
  //   });
  // });
};


