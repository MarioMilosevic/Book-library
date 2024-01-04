"use strict";
import { data } from "./constants";
import { toggleClass } from "./helpers";
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

newExitBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    toggleClass([modal, overlay], "hidden");
    if (!modal.classList.contains("hidden")) {
      titleInput.focus();
    }
  })
);

submitBtn.addEventListener("click", function () {
  const titleInputValue = titleInput.value;
  const authorInputValue = authorInput.value;
  const pageNumInputValue = pageNumInput.value;
  console.log(titleInputValue);
  console.log(authorInputValue);
  console.log(pageNumInputValue);
//   if (
//     titleInputValue.length >= 1 &&
//     authorInputValue.length >= 1 &&
//     pageNumInputValue !== 0
//   ) {
//     toggleClass([modal, overlay], "hidden");
//   } 
});

const createBook = () => {
  const book = document.createElement("div");
  book.innerHTML = "";
  book.innerHTML = `<div class="book">
        <p class="bookTitle">Lord of the Rings: Two Towers</p>
        <p class="bookAuthorName">J.R.R. Tolkien</p>
        <p class="bookNumPages">500</p>
        <div class="bookButtons">
        <button class="read">unRead ✅</button>
        <button class="removeBook">Delete </button>
        </div>
    </div>`;
  books.appendChild(book);
};

createBook();
createBook();
createBook();
createBook();
createBook();
createBook();
