// console.log("1");

// function guessNumber() {
//   let from = 0;
//   let to = 100;

//   let number = 0;

//   let game_end = false;

//   while (!game_end) {
//     number = from + Math.floor((to - from) / 2); // 50
//     if (confirm(`Is you number > ${number}`)) {
//       if (number < 100) {
//         from = number + 1; // 51 - 100 100
//       }
//     } else if (confirm(`Is you number < ${number}`)) {
//       if (number > 0) {
//         to = number - 1; // 49 100
//       }
//     } else if (confirm(`Your number is equal === ${number}`)) {
//       game_end = true;
//     }

//     if (from === to) {
//       game_end = true;
//       number = from;
//     }
//   }
//   console.log("We guessed you number, it is", number);
// }

// guessNumber();

// // number is Palindome? 12345 - no
// // 12321 - yes;
// // 99099 - yes
// // 43334 - yes

// // 21;

// // const isPalindrome = (num) => {
// //   const first_two = Math.floor(num / 1000);
// //   const last_two = num % 100;
// //   const diff = Math.abs(first_two - last_two);

// //   return diff % 9 === 0 || first_two === last_two ? true : false;
// // };

// // isPalindrome(12321);
// // isPalindrome(12921);
// // isPalindrome(99399);
// // isPalindrome(64364);
// // isPalindrome(32413);
// // isPalindrome(00000);

// // 89508;

// const isPalindrome = (num) => {
//   let perevernute = 0;
//   let copy = num; // 456065
//   if (num < 0) {
//     return false;
//   }
//   while (copy > 0) {
//     const last_two = copy % 10; // 4
//     perevernute = perevernute * 10 + last_two; // 4 ---
//     copy = Math.floor(copy / 10);
//   }
//   console.log("per ==", perevernute);
//   return perevernute === num;
// };

// isPalindrome(12321);
// isPalindrome(12921);
// isPalindrome(99399);
// isPalindrome(64364);
// isPalindrome(32413);
// isPalindrome(11111);

// Arrays in JS

const arr = ["name", "Ros", "age", 27]; //  array literal
const arr_copy = arr;

arr_copy[0] = "1";

arr[length + 1] = "new";

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // arr[0] === 1; arr[1] === 2;
}

arr.push(100);

arr.shift();

arr.unshift();

const result = arr.map((item) => {
  console.log(item);
});

// function a(a,b){
//     let a = 10;
//     let b = 20
//  }
// a(10, 20)
[10, 10, 10, 10];

arr.map();

arr;

[1, 2, 3, 4, 5, 6, 7, 8, 9].filter((item) => item % 2 === 0);
[
  [2, 3],
  [1, 2],
  [40, 10],
  [10, 10],
  [50, 30],
];

const obj2 = {
  drivers: ["Anton", "Bob", "Paul", "sfsdf"],
};

obj2.drivers.filte((item) => item.length > 4);

const kms = [10, 20, 45.6];

const result = kms.map(callback);

// callback(item);

// const callback = (item) => {
//   return item / 1.6;
// };

function callback(item) {
  return item / 1.6;
}

const kms = [10, 20, 45.6];

let res = [];

for (let i = 0; i < kms.length; i++) {
  res.push(callback(kms[i]));
}
