/*library array to store Book objects */
const library = [];

const addBookBtn = document.getElementById("add-book");
const bookContainer = document.getElementsByClassName("book-container");
const inputBook = document.getElementsByClassName("input-book");

class Book {
  constructor(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
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
      new Book(
        inputBook[0].value,
        inputBook[1].value,
        inputBook[2].value,
        (haveRead = true)
      )
    );
  }
  inputBook[0].value = "";
  inputBook[1].value = "";
  inputBook[2].value = "";
});

/** function to create and book to bookContainer */
function addBook(arrayIndex) {
  let book = document.createElement("div");
  book.classList.add("book");
  book.innerText = "Lorem100";
  let ul = document.createElement("ul");
  for (let i = 0; i < inputBook.length; i++) {
    let li = document.createElement("li");
    li.innerText = "Book Name :" + `${library[arrayIndex].title}`;
    ul.appendChild(li);
    li.innerText = "Auther Name:" + `${library[arrayIndex].author}`;
    ul.appendChild(li);
    li.innerText = "Number of Pages :" + `${library[arrayIndex].pages}`;
    ul.appendChild(li);
  }
  book.appendChild(ul);

  let buttons = document.createElement("div");
  buttons.classList.add("button-js-container");
  let status = document.createElement("button");
  status.classList.add("status");
  if (haveRead === true) {
    status.innerText = "Read";
    status.style.backgroundColor = "#9fff9c";
  } else {
    status.innerText = "Not Read";
    status.style.backgroundColor = "red";
  }
  status.addEventListener("click", function () {
    if (status.innerText === "Read") {
      status.innerText = "Not Read";
      status.style.backgroundColor = "red";
    } else {
      status.innerText = "Read";
      status.style.backgroundColor = "#9fff9c";
    }
  });

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  deleteButton.classList.add("deleteBook");
  deleteButton.addEventListener("click", function (e) {
    let target = e.target;
    target.parentElement.parentElement.remove();
  });

  buttons.appendChild(status);
  buttons.appendChild(deleteButton);
  book.append(buttons);
  console.log(book);
  return book;
}
console.log(bookContainer);
for (let i = 0; i < bookContainer.length; i++) {
  console.log(bookContainer[i]);
}
