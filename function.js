"use strict";
const productArr = [];
function validateInputs(productName, productComment) {
  if ((productName !== "") & (productComment !== "")) {
    attnMessageEl.classList.remove("attn-active");
    return true;
  } else {
    attnMessageEl.classList.add("attn-active");
  }
  attnMessageEl.classList.add("attn-active");
}

function addComment(productName, productComment) {
  if (validateInputs(productName, productComment)) {
    const productArr = getProduct(productName);
    productArr.push(productComment);
    saveProduct(productName, productArr);
  }
}

function getProduct(productName) {
  const data = localStorage.getItem(productName);
  if (data === null) {
    return [];
  }
  return JSON.parse(data);
}

function saveProduct(productName, productArr) {
  const json = JSON.stringify(productArr);
  localStorage.setItem(productName, json);
}
