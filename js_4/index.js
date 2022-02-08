// ----- Function declaration

// !!!! Function declarations are hoisted !!!


// function logName () {
//     // .. function body
// }

// var a; // undefined; 
 // logName(); // invoker function ()

function logName () {
    // .. function body
    console.log('Ros')
}

console.log(a); // undefined
logName()

var a = 10;

// let myName = 'Ros';

GET_NAME(); // erro


// ------ Function Expression

const GET_NAME = function () { 
    // .. function body
}

// --- anon function

// function() {
//     console.log('hi');
//   }

(function() {
    console.log('I am anon')
})();






GET_NAME();


// Hoisting

function printNameAndSayHello(username, userage = 'No age present') {
// let usename = undefined; --- 'Ros'
// let userage = undefined; --- 27

console.log(`Hi, ${username}, you are ${userage} yo`);

}

function printNameAndSayHello(username, userage, num1, num2, num3) {


// let usename = undefined; --- 'Ros'
// let userage = undefined; --- 27


console.log(`Hi, ${username}, you are ${userage} yo`);

}

printNameAndSayHello('Ros', 27);
printNameAndSayHello('Ros', 3,45,2,6,10,100,'hello'); //

function withoutParams () {
    console.log('We have 0 params');
    console.log('Arguments ==', arguments.length);

    console.log(arguments[3]);
}

withoutParams(1,2,3,4,5,6,8,'Ros');

function addNumber(a, b = 100, console) {
    //let a = 10;
    // let b =

    console.log(a + b)
}

addNumber(10, 10, console.log);
logName()
getName() 
calculateNSD(num1, num2)  // -->> NSD = 10;

function calculateDob(number_1, number_2) {

    // /...
   return number_1 * number_2; // 5 * 5 = 25
   // not accessible area
   console.log('Please, log me');
   // return 25;

   // Implicit all functions return undefined
}


 

let result = 0;

function calcSum(a, b) {
    let myAge = 27;
    let city = 'Kyiv'; 
    result
    const PI = 3.14;
    result = a + b; // it returns
}

console.log(city);
console.log(myAge); // 


let resuFunc = calcSum(10, 5) // undefined;

console.log(result)


// es5

// es6 

calcSum() /// it won't work here

calcSum = (a,b) => {
    x = 100;
    result = a + b;
}

calcSum() /// it work here




(function() {
    var x = 1;
    return x;
})();


(function() {
    var x = 2;
    return x;
})();

function foo() {console.log(1)}

// foo(); // 1 ? 2

console.log(foo()); //  1 

foo = () => {
  console.log(2)
}


function foo() {
    console.log('Inside foo');
    function foo2() {
     console.log('Inside foo2')
     return 'We are deep inside'
    }
    return foo2;
}

const res = foo2();

// foo() ===>   function foo2() {
//     console.log('Inside foo2')
//    }










