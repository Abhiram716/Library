const addBook = document.getElementById("add-book");
const bookContainer = document.getElementById("book-container");
const inputBook = document.getElementsByClassName("input-book");

addBook.addEventListener("click", function () {
  let book = document.createElement("div");
  book.classList.add("book");

  let ul = document.createElement("ul");
  for (let i = 0; i < inputBook.length; i++) {
    let li = document.createElement("li");
    li.innerText = `${inputBook[i].value}`;
    ul.appendChild(li);
  }
  book.appendChild(ul);
  console.log(ul);
  let checkButton = document.createElement("button");
  checkButton.innerHTML = `<i class="fa-solid fa-check"</i>`;
  checkButton.classList.add("checkBook");
  book.appendChild(checkButton);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  deleteButton.classList.add("deleteBook");
  book.appendChild(deleteButton);

  if (
    inputBook[0].value === "" ||
    inputBook[1].value === "" ||
    inputBook[2].value === ""
  ) {
    alert("please Enter all The Details.");
  } else {
    bookContainer.appendChild(book);
  }
  inputBook[0].value = "";
  inputBook[1].value = "";
  inputBook[2].value = "";
  checkButton.addEventListener("click", function () {
    checkButton.parentElement.style.textDecoration = "line-through";
  });
  deleteButton.addEventListener("click", function (e) {
    let target = e.target;
    target.parentElement.remove();
  });
});
