// function User(prop1, prop2) {
//   // this = {}
//   // {} implicitlky returns
//   this.a = prop1;
//   this.b = prop2;
//   this.logName = function () {
//     console.log(this.a + this.b);
//   };
// }

// const newUser = new User(100, 200);
// const newUser2 = new User(3400, 400);
// const newUser3 = new User(100, 500);
// const newUser4 = new User("Ros", "Lviv");
// // const newUser = new User;

// console.log(newUser);
// console.log(newUser2);
// console.log(newUser3);
// console.log(newUser4);

// function foo() {
//   console.log(arguments);
// }

// foo(1, 2, 3, 45, 6, 10);

// const foo2 = (a, b, c, ...someOtherInfo) => {
//   console.log("a =", a);
//   console.log("b =", b);
//   console.log("c =", c);
//   console.log("someOtherInfo =", someOtherInfo);
// };

// foo2(1, 2, 4, 5, 6, 100);

// const array = ["s", "t", "r", "f"];
// const newArray = [...array];

// console.log("newArray =", newArray);
// array[1] = "TTTTT";
// console.log("array =", array);
// console.log("newArray =", newArray);

// const obj = { a: 1, user: "Bob", age: 30 };

// const { a, user: myUser } = { ...obj };

// console.log("a ==", a);
// // console.log("user ==", user);
// console.log("myUser ==", myUser);
// console.log(newObj);

/// Event in js
const manipulateDOM = () => {};

const UL = document.getElementsByTagName("ul")[0];

// console.dir(UL);

// UL.onclick = function () {
//   console.log("I was clicked");
//   console.log(this);
// };

// const lis = document.getElementsByTagName("li");

// console.log(lis);

// for (let i = 0; i < lis.length; i++) {
//   lis[i].onclick = function () {
//     // console.log("li was clicked");
//     // console.log(this);
//     this.classList.toggle("active");
//   };
// }

// UL.onclick = () => {
//   console.log("I was clicked from arrow");
//   console.log(this);
// };

// addEventListener

const btn = document.getElementById("btn_order");
const section = document.getElementById("section_block");
const todoUL = document.getElementById("todo_block");
const body = document.body;

// section.addEventListener("click", function (event) {
//   console.log("event ==", event);
//   console.log("Section was clicked");
// });

// btn.addEventListener("click", function (event) {
//   console.log("event ==", event);

//   console.log("target ==", event.target);
//   console.log("currentTarget ==", event.currentTarget);
//   // console.log("I was clicked");
// });

// section.addEventListener("click", function (event) {
//   console.log("from section target ==", event.target);
//   console.log("from currentTarget ==", event.currentTarget);
//   console.log(this === event.currentTarget); // ?
// });

todoUL.addEventListener("click", function (event) {
  console.log("event target", event.target.textContent);
  if (event.target.textContent === "10") {
    event.target.classList.toggle("active");
    // console.log("sibling =", event.target.previousElementSibling);
    event.target.previousElementSibling.style.display = "none";
    body.style.backgroundColor = "cyan";
  }
});

btn.addEventListener;

// btn.addEventListener("mouseout", function () {
//   console.log("Mouse was on me!!!");
// });

////

// btn.removeEventListener();
