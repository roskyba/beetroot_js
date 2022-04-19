// console.log(1)
// console.log(2)

// // data types
// Boolean
// undefined
// Number
// null
// string
// Symbol / BigInt-- all of them are primitive

// Object-- non - primitive

// [], function

// const arr1 = [1, 2, 4];
// const arr2 = arr1;

// arr2[1] = 100;

// function foo() { }

// arr1.length = 15;
// // remove undefined's

// // console.log(arr1)

// console.log(arr1.map(elem => {
//     if (elem != undefined) {
//         return elem;
//     } else {
//         return;
//     }
// }))

// const newA = arr1.filter(elem => {
//     if (elem != undefined) {
//         return elem;
//     }
// });



// console.log(newA)

// const key = 'your key';

// const ab = { a: 1, b: 2, 'your key': 'sdfgsfe4534534fsdf' }

// ab.a-- > 1 // dot notation
// ab['a']-- > 1
// ab[key] ---> 'sdfgsfe4534534fsdf'
// ab.key = error 

// foo();
// console.log(a);
// console.log(b);

a = 200;

var a = 100;
// var a // declaration
// a = 100 // initialiation 


const foo2 = () => { } // arrow-function

const foo3 = function () { }

// function outer() {
//     console.log('outer');
//     let a = 10 + 10;
//     return function () {
//         console.log('inner return')
//     }
// }

// const result = outer();

const arrowFunc = () => {
    console.log('this =', this)
}


const obj = {
    method: function () {
        this.a = 101;
        console.log('in method this =', this)
        console.log('this.a =', this.a)
    },
    a: 100,
    method2: foo, // undefined
    method3: arrowFunc,
    method4: () => {
        console.log('this inside method4 =', this)
    }
}

// for (var i = 0; i < 100; i++) {

// }

// for (let i = 0; i < 100; i++) {

// }

// if (true) {
//     let newVar = 'str';

// }


// console.log(newVar)

// this -- -> ?

function foo() {
    console.log('this =', this)
}

// foo();

// obj.method();

// console.log(obj)
// obj.method2();

// arrowFunc();

// obj.method3();
// obj.method4();

// call, apply, bind

function foo10(a, b, c, d) {
    // var a = 100;
    // var b = 10;

    // console.log(a)
}

// foo10.apply({ a: 1, b: 2 }, [100, 10, 21, 15]) // ->  result of foo10
// foo10.call({ a: 1, b: 2 }, 100, 10, 21, 15) // -> result of foo10

// const res = foo10.bind({ a: 1, b: 2 }, 100, 10, 21, 15)

//

// res();


// btn.addEventListener((item) => {
//     console.log(this) // --> this === DOM of btn element
// })

function Student(name, age) {
    // console.log('student')
    // var name = undefined;
    // var age = undefined
    this.name_of_student = name;
    this.age_of_student = age;
    //...
    // this = {};
    // {} is returned from function call;
}

const stepan = new Student('Stepan Andreyuk', 40); // {name: 'Stepan Andreyuk', age: 40};

console.log('stepan object =', stepan);
const arina = new Student('Arina Boblskey', 20); // {};
console.log('arina object =', arina);

const student = [{ name: 'Ros', age: 27, }, { name: 'Bob', age: 31 }];

const result = student.map((item) => {
    const std = new Student(item.name, item.age);
    return std;
})

console.log('result =', result);








