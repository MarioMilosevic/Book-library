"use strict";
import { data } from "./constants";

const { newBtn, modal, overlay } = data();

newBtn.addEventListener("click", function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  console.log("newBtn");
  console.log(modal);
  console.log(overlay);
});

const createBook = () => {
  const book = document.createElement("div");
  book.innerHTML = "";
  book.innerHTML = `<div class="book">
        <p class="bookTitle"></p>
        <p class="bookAuthorName"></p>
        <p class="bookNumPages"></p>
        <button class="read"></button>
        <button class="removeBook"></button>
    </div>`;
};
