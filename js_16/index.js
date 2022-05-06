// console.log(1)

// function foo() {

//     // 
//     bz();
// }

// function bz() {
//     // buuzz();
// }

// foo();

// for (var i = 0; i < 10; i++) {
//     var b = 100;
// }

// console.log(i); // 9 ---> 10
// console.log(b); // 100 ----> 


// for (let i = 0; i < 10; i++) {
//     let b = 100;
// }

// console.log(i); // error i is not defined
// console.log(b); // error b is not defined


// setTimeout(delay, 2000)


function delay() {
    console.log('I was delayed');
    setTimeout(delay3, 3000);

    // fetch()
    // for()
    // arr.map()
}

function delay2() {
    console.log('I was delayed part 2');
    // fetch()
    // for()
    // arr.map()
}


// console.log(1)
// console.log(2)
// setTimeout(delay, 2000);
// console.log(4);
// setTimeout(delay2, 1000);
// console.log(5);


// for (var i = 0; i < 10; i++) {
//     (function (inner) {
//         setTimeout(function () {
//             console.log(i);
//         }, 1000 * inner);
//     })(i)
// }

// function dohowework(lesson) {
//     if (lesson) {
//         // making homework
//         // ...
//         // ...
//         const data = {}
//         const res = uploadToGithub(data);
//         if (res) {
//             takeNextHomework(lesson + 1);
//             sayTYROS()
//         }
//     }
// }

// function uploadToGithub(dataOfHW) {
//     // ..
//     // ..
//     return fetch('github/roskyba/send.git');
// }


// let result = 1 + 12; // 12

// console.log('Before promise')

// let myPromise = new Promise((resolve, reject) => {
//     if (result === 13) {
//         /// http request
//         setTimeout(() => {
//             // const res = fetch('/')
//             console.log('We got response from server!');
//             resolve({
//                 state: 'Succes',
//                 time: 3000,
//                 value: 'ros'
//             })
//         }, 4000)
//     } else {
//         reject({
//             state: 'ERROR',
//             time: 0
//         })
//     }
// });


// console.log('In between');


// ///..

// myPromise.then(res => console.log('Result of my Promise =', res))

// console.log('After promise');



const p1 = Promise.resolve(1);
const p2 = 2;
const p3 = new Promise((res, rej) => {
    setTimeout(rej, 4000, 'data')
})

Promise.all([p1, p2, p3]).then(
    (results) => {
        console.log('Results =', results)
    }
)


Promise.race([p2, p1, p3]).then(
    res => console.log(res)
)



let callTaxiBolt = new Promise((res, rej) => {
    const obj = {

    }
    if (obj.drives.filter) {
        resolve({
            model: 'audi',
            plate: 'AT4354DC'
        })
    } else {
        reject(
            'Sorry, not drivers available'
        )
    }
})

let callTaxiUber = new Promise()


// callTaxiBolt
//     .then(res => console.log('Ride to place', res))
//     .catch(
//         callTaxiUber
//             .then( // ... //)
//         .catch ( // .. //)
//     )

//     else.addEventListener



