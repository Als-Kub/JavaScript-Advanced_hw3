"use strict";

const attnMessageEl = document.querySelector(".attn");
const productNameEl = document.querySelector(".productName");
const productCommentEl = document.querySelector(".productComment");
const btnEl = document.querySelector(".button");
btnEl.addEventListener("click", () => {
  addComment(productNameEl.value, productCommentEl.value);
});
