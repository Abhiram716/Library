/*library array to store Book objects */
const library = [];

const addBookBtn = document.getElementById("add-book");
const books = document.getElementById("books");
const inputBook = document.getElementsByClassName("input-book");

class Book {
  constructor(title, author, pages, position) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.position = position;
  }
}

/** eventListner to add book into bookContainer */
addBookBtn.addEventListener("click", function () {
  if (
    inputBook[0].value === "" ||
    inputBook[1].value === "" ||
    inputBook[2].value === ""
  ) {
    alert("please Enter all The Details.");
  } else {
    library.push(
      new Book(inputBook[0].value, inputBook[1].value, inputBook[2].value)
    );
    addBookBtn.addEventListener("click", addBook(library.length - 1));
  }
  inputBook[0].value = "";
  inputBook[1].value = "";
  inputBook[2].value = "";
});

/** function to create and book to bookContainer */
function addBook(arrayIndex) {
  let book = document.createElement("div");
  book.classList.add("book");

  let ul = document.createElement("ul");

  let li = document.createElement("li");
  li.innerText = "Title : " + library[arrayIndex].title;
  ul.appendChild(li);

  let li2 = document.createElement("li");
  li2.innerText = "Author : " + library[arrayIndex].author;
  ul.appendChild(li2);

  let li3 = document.createElement("li");
  li3.innerText = "Pages : " + library[arrayIndex].pages;
  ul.appendChild(li3);

  book.appendChild(ul);

  let buttons = document.createElement("div");
  buttons.classList.add("button-js-container");
  let status = document.createElement("button");
  status.classList.add("status");
  status.innerText = "Read";
  status.addEventListener("click", function () {
    if (status.innerText === "Read") {
      status.innerText = "Not Read";
      status.style.backgroundColor = "rgb(255, 156, 156)";
    } else {
      status.innerText = "Read";
      status.style.backgroundColor = "#9fff9c";
    }
  });
  for (let i = 0; i < library.length; i++) {
    library[i].position = i;
  }
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  deleteButton.classList.add("delete-book");
  deleteButton.addEventListener("click", function () {
    if (
      deleteButton.parentElement.parentElement.position ===
      library.length - 1
    ) {
      library.shift();
    } else if (deleteButton.parentElement.parentElement.position === 0) {
      library.pop();
    } else {
      delete library[deleteButton.parentElement.parentElement.position];
      fillEmptySpace(deleteButton.parentElement.parentElement.position);
    }
    deleteButton.parentElement.parentElement.remove();
  });
  buttons.appendChild(status);
  buttons.appendChild(deleteButton);
  book.appendChild(buttons);
  books.appendChild(book);
}

/** function to shift elements to lower positions after deleting at random position */
function fillEmptySpace(index) {
  for (let i = index; i < library.length; i++) {
    library[i] = library[i + 1];
  }
  library.shift();
}
