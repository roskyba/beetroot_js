354 = 453
123 = 321;

let number = 567; // -> 765

const cifr1 = number % 10; // -> 7
const cifr2 = parseInt(number / 10 ) % 10; // -> 6
const cifr3 = Math.floor(number / 100); // -> 5

console.log(`${cifr1}${cifr2}${cifr3}`)

if (number > 10) {

//    4 === '4'; // type coersion   Number != String
    console.log(`${number} is greater than 100`)
}

if (+prompt('Enter your number') > 10) {
    console.log(`Your number is greater than 10`);
} else {
    console.log(`Your number is less than 10`);
}

if (true) {
    // ...
} else {

}

// if () {} 
// if () {}
// if () {}
// if () {}

if (Boolean(false)) {
 // ...
} else if (true)  {

 // runs it
} else if (100 > 10){
    // if check and it is false
} else {
    console.log('Sorry, I ma dying')
}

let a = 100;
let b = 200; 
let c = 300;


const result = i != j // true of false;


/// 
const city = 'lviv';

switch (city) {
    case ('Lviv' || 'lviv' ): 
        console.log('Hi Lviv');
        break;
    case 'Poltava': 
        console.log('Hi Poltava');
        break;
    default:
        console.log("Hi Unknown city");
        break;
}



a = 'test ';
for (let i = 0; i < 10; i++ ) {
    for (let j = 0; j < 10; j++) {
        console.log('j ==', j);
    }
    console.log('i ===', i);
}

let i = 0;
i < 10; // true
'Hello';
i < 10 // 1 < 10 --- true;
'Hello';
2 < 10 // 2 < 10 --- true..

// 10-th iteration
9 < 10 // true;
'Hello';
10 < 10 // false





// i++ та ++i


for (let i = 0; i < 10; i++) {
    console.log(i);
    if(i % 2 == 0) { 
        continue;  // please, take next iteration, and skip code below
    } 
    console.log(i);  // 7, 5, 3, 1
    if(i === 9) { 
        break;  // in this place we exit loop entirely
    }
    // ..
}   

label2: for (let j=0; j<10; j++){
    label: for (let i = 0; i < 10; i++) {
        if(i % 2 == 0) { 
            console.log(`${i} є парним`);
            break label;
        }
        console.log(`Число ${i} - непарне`)
    } 
}

let askNumber = 0;
let fails = 0;
const PIN = 1111;


// Цикл з переудомовою
while (fails < 3) {
    askNumber = +prompt('Enter your PIN');
    if (+askNumber == PIN) {
        console.log('Your PIN is OK. Take money');
        break;
    }
    console.log('Your PIN is not correct');
    console.log(`You have ${3-fails} tries`)
    fails += 1;
}


// Цикл з післяумовою
do {
console.log('Hello');
i++;
} while (i<10)



// console.log(`You guess number after ${fails} of fails`);


