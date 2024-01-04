"use strict";

export function data() {
  const books = document.querySelector(".books");
  const newBtn = document.querySelector(".newBtn");
  const submitBtn = document.querySelector(".submitBtn");
  const overlay = document.querySelector(".overlay");
  const modal = document.querySelector(".modal");

  return {
    newBtn,
    modal,
    overlay,
    books,
    submitBtn,
  };
}
