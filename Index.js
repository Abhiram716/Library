const addBook = document.getElementById("add-book");
const bookContainer = document.getElementById("book-container");
const inputBook = document.getElementsByClassName("input-book");
const readBook = document.getElementById("read-book");


addBook.addEventListener("click", function () {
  let book = document.createElement("div");
  book.classList.add("book");
  let ul = document.createElement("ul");
  for (let i = 0; i < inputBook.length; i++) {
    let li = document.createElement("li");
    li.innerText = "Book Name :"+`${inputBook[0].value}`;
    ul.appendChild(li);
    li.innerText = "Auther Name:"+`${inputBook[1].value}`;
    ul.appendChild(li);
    li.innerText = "Number of Pages :"+`${inputBook[2].value}`;
    ul.appendChild(li);
  }
  book.appendChild(ul);

  let buttons =document.createElement("div");
  buttons.classList.add("button-js-container");
  
  let status = document.createElement("button");
  status.classList.add("status");
  status.innerText = "Not Read";
 

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  deleteButton.classList.add("deleteBook");
  
  buttons.appendChild(status);
  buttons.appendChild(deleteButton);

  book.appendChild(buttons);
  console.log(book);
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

    status.addEventListener("click", function () {
        status.innerText="Not Read";
    });

    deleteButton.addEventListener("click", function (e) {
        let target = e.target;
        target.parentElement.parentElement.remove();
    });

    readBook.addEventListener("click",function(){
        status.innerText="Read"
    });
});
// addBook.addEventListener("click", function () {
//   let book = document.createElement("div");
//   book.classList.add("book");

//   let ul = document.createElement("ul");
//   for (let i = 0; i < inputBook.length; i++) {
//     let li = document.createElement("li");
//     li.innerText = `${inputBook[i].value}`;
//     ul.appendChild(li);
//   }
//   book.appendChild(ul);
//   // console.log(ul);
//   let status = document.createElement("button");
//   status.innerText = `Not Read`;
//   status.classList.add("checkBook");
//   book.appendChild(status);

//   let deleteButton = document.createElement("button");
//   deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
//   deleteButton.classList.add("deleteBook");
//   book.appendChild(deleteButton);

//   if (
//     inputBook[0].value === "" ||
//     inputBook[1].value === "" ||
//     inputBook[2].value === ""
//   ) {
//     alert("please Enter all The Details.");
//   } else {
//     bookContainer.appendChild(book);
//   }
//   inputBook[0].value = "";
//   inputBook[1].value = "";
//   inputBook[2].value = "";
//   status.addEventListener("click", function () {
//     status.innerText="Read";
//   });
//   deleteButton.addEventListener("click", function (e) {
//     let target = e.target;
//     target.parentElement.remove();
//   });
//   // bookContainer.appendChild(book);
// });
