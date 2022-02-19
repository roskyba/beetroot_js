[1, 2, 3, 4, 5, 7, 8].reduce((previousValue, currentValue) => {
  console.log("previousValue ===", previousValue);
  console.log("currentValue ===", currentValue);
  return previousValue + currentValue;
});

function addNumbers(num1, num2, num3) {}

const res = addNumbers(fromBE); // ->> undefined


fromBE - 200; // if ( resut < 200 )

// function init() {
// const mainAdd = () => {}..
// const reducer = () =>
// [1,2,4].reduceRight()
// }

function calculator() {
  console.log("outer");
  let innerValue = 0;
  return function () {
    innerValue++;
    console.log("innerValue ==", innerValue);
  };
}


const calc1 = calculator();
const calc2 = calculator();
const calc3 = calculator();
const calc4 = calculator();
const calc5 = calculator();

1 - calculator(); calc5() // this
2 - obj.drive(); // this 
3 - .map(callback) // this
4 - this === currentTarget // in .addEventListener() method
5 - new // this === {} if functions was called with new operator



function logThis() {
    console.log('this ==', this)
}


const logThis2 = function() { // this === {}   console.log('this ==', this)}



const obj = {
    method: logThis,

};


logThis(); // ---> this === Window object
obj.method(); // ----> this === obj
[1,2,4].map(logThis); // ----> this === Window object



const obj2 = {
    method: logThis,
    method2: () => {
        console.log('this ===', this);
    }
};

logThis.call({name: 'Ros', age: 27}, )

const printName = (userName, userAge) => {
    console.log(this.userName + this.userAge);
};

printName('Ros', 27);

printName.call({name: 'Oleh', city: 'IF'}, 'Maria', 20);

function log() {
    console.log(`${this.userName} is ${this.userAge} yo`);
};

log.call({userAge: 20, userName: 'Oleh'});