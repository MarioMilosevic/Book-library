"use strict";
import { data } from "./constants";

const { newBtn, modal, overlay, books, submitBtn } = data();

newBtn.addEventListener("click", function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  console.log("newBtn");
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

createBook()
createBook()
createBook()
createBook()
createBook()