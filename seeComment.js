const pageTitleEl = document.querySelector(".title");

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  const commentsLS = localStorage
    .getItem(key)
    .replace("[", "")
    .replace("]", "")
    .split(",");

  const productBoxEl = document.createElement("div");
  productBoxEl.className = "productBox";
  pageTitleEl.after(productBoxEl);

  const productTitleEl = document.createElement("h2");
  productTitleEl.className = "product-title";
  productTitleEl.textContent = "Product: " + key;
  productBoxEl.prepend(productTitleEl);

  const buttonEl = document.createElement("button");
  buttonEl.className = "product-button";
  buttonEl.textContent = "Show Comments";
  productTitleEl.after(buttonEl);

  const commentsEl = document.createElement("div");
  commentsEl.className = "comments";
  productBoxEl.after(commentsEl);

  const commentListEl = document.createElement("ol");
  commentListEl.className = "comment-list";
  commentsEl.prepend(commentListEl);

  for (const iterator of commentsLS) {
    const liEl = document.createElement("li");
    liEl.className = "li";
    commentListEl.append(liEl);

    const commentEl = document.createElement("p");
    commentEl.className = "comment-text";
    commentEl.textContent = iterator;
    liEl.appendChild(commentEl);

    const removeBtnEl = document.createElement("button");
    removeBtnEl.className = "remove-comment";
    removeBtnEl.textContent = "Delete comment";
    liEl.appendChild(removeBtnEl);

    removeBtnEl.addEventListener("click", () => {
      deleteCommentfromDom();
      deleteCommentfromLS(iterator, commentsLS, key);

      if (commentsLS.length === 0) {
        deleteProductFromDom();
        localStorage.removeItem(key);
      }
    });

    function deleteCommentfromDom() {
      liEl.classList.add("remove");
    }

    function deleteCommentfromLS(iterator, commentsLS, key) {
      commentsLS.splice(commentsLS.indexOf(iterator), 1);
      localStorage.setItem(key, JSON.stringify(commentsLS));
    }
  }

  let toggle = true;
  buttonEl.addEventListener("click", () => {
    if (toggle) {
      commentsEl.classList.add("active");
      buttonEl.textContent = "Hide Comments";
      return (toggle = false);
    } else {
      commentsEl.classList.remove("active");
      buttonEl.textContent = "Show Comments";
      return (toggle = true);
    }
  });

  function deleteProductFromDom() {
    productBoxEl.classList.add("remove");
  }

  function deleteProductfromLS(key) {
    productBoxEl.classList.add(key);
  }
}
