// Objects in JS

//

4

const myObj = { // Object literal 
    user:  'Ros',  // key: value
    age: 27,
    'is adult': true, 
    4: 'Lviv',
    callName: function () {
        console.log('Hello from myObj')
    }, // methods
}; 




myObj.age;

myObj.callName();  //

console.log(myObj.user); // dot accesor

console.log(myObj["is adult"]);
console.log(myObj[4]);

myObj.newProp = 'Hello I am new here';


const a = {
    number: 100,
}

const b = a; // it copies lint to that object in HEAP memory
b.number = 200;

//...
// ...
// ...

b.someNewProp = true;

// function newObj() {
//     return {a: 1, b: 2}
// }

// const someObj = newObj()


addNumbers = (a, b) => a + b; // 
//  function newAddNumber() { a + b}

for (let propName in myObj) {
    console.log(`${propName} = ${myObj[propName]}`); //
}

const Math = {
    a: 10,
    b: 20,
    c: 30,
}


Object.values(Math).forEach((num) => num * 10)


console.log(Math)

const newModifiedArr = Object.values(Math).map((num) => num * 10)
const newModifiedArr2 = Object.keys(Math).map((key, index) => `${key}_${index}`)



// [1,2,4,5,6,10].map((item) => console.log(item));

const a1 = {bc: 100}; // 'HEAP_234234'

const a2 = {bc: 100}; // 'HEAP_6556'

a2 == a1; // false
a1 == a2; // false

a2 === a1; // false

a2.bc == a1.bc; // false // false

a1.newOb = {abc: 200}
a2.newOb = {abc: 200}

 == a2.newOb; // false
a1.newOb === a2.newOb; // false

