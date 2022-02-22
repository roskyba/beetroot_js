const a = {
  name: "Ros",
  age: 27,
};
// function clock() {
//   const date = new Date();
//   return {
//       sec: ..,
//       min:..
//   };
// }

// const my_clock =

// const new_obj = Object.create(a); // {}
// new_obj.test = "tst";

// new_obj_1.hasOwnProperty(name); //  false
// new_obj_1.hasOwnProperty(test); //  true

// console.log(new_obj);

const methodsOfNewUser = {
  logName: function () {
    console.log(this.name);
  },
  logIn: function () {
    console.log(this.name + " logged in");
  },
  logOut: function () {
    console.log(this.name + " logged out");
  },
  isHuman: true,
};

const user_1 = {
  name: "user 1",
  logIn: function () {
    console.log(this.name + " logged in");
  },
};

const user_2 = Object.create(methodsOfNewUser);
const user_3 = Object.create(methodsOfNewUser);
const user_4 = Object.create(methodsOfNewUser);

console.log(user_2);
user_2.name = "Ros";
user_3.name = "Bob";
user_4.name = "Cindy";

user_2.logName();
user_3.logName();
user_4.logName();

// user_5.printMoney;
// methodsOfNewUser.printMoney();

// user_100;

// DRY - do not repeat yourself

function user(name, age) {
  let new_user = {};
  new_user.name = name;
  new_user.age = age;
  new_user.logName = function () {
    //...
  };

  return new_user;
}

const new_user10 = user("Tiny", 20);
const new_user11 = user("Tiny", 20);
const new_user12 = user("Tiny", 20);
const new_user13 = user("Tiny", 20);

const new_obj_1 = Object.create(methodsOfNewUser);
console.log(new_obj_1);

// const animal = {

//     run:
//     populate:
//     sleep:
// }

// const see_anim

// const dog = {}

// const whale = {}

function Student(name, grade) {
  // ...
  // {} === this
  // return this
  this.name = name;
  this.grade = grade;
}

Student.prototype.log = function () {
  console.log(this.name + " is in " + this.grade + " grade");
};

Student.prototype.teach = function () {
  console.log(this.name + " is in class, learning");
};

Student.prototype.hasFriends = function () {
  console.log("Yes and he in in ", this.grade);
};

const student = new Student("Sail", 10); //
const student_1 = new Student("Charles", 20);
const student_2 = new Student("Raik", 100);

student.log();
console.log(student.logName); // undefined
student_2.teach();
student_1.hasFriends();

// console.dir(student.foooo());

// console.dir(student.foooo());

console.dir(Student);

Student.prototype.logOut = function () {
  console.log("Log out", this.name);
};

Student.prototype.foooo = function () {
  console.log("fooooo");
};

// console.dir(student.foooo());

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hasTeach() {
    console.log("IS learning");
  }

  log() {
    console.log(this.name);
  }
}

var new_person = new Person("bob", 40);
var new_person1 = new Person("Snail", 10);

new_person.hasTeach();
Person.someNewMethod = 200;

console.log(new_person);
console.log(new_person1);
