// console.log(1)

// let asscending = true;

// const table = document.getElementById('table');

// table.onclick = function (event) {
//     let TH = event.target;
//     if (event.target.tagName !== 'TH') {
//         return;
//     }
//     sortColumn(TH.cellIndex, TH.dataset.type)
// }



// function sortColumn(index, type) {
//     let tbody = document.querySelector('tbody');
//     let tbodyrows = Array.from(tbody.rows);
//     let compareCallBack;
//     asscending = !asscending;

//     console.log(asscending)
//     switch (type) {
//         case 'number':
//             // logic for number
//             if (asscending) {
//                 compareCallBack = function (rowA, rowB) {
//                     return rowA.cells[index].innerHTML - rowB.cells[index].innerHTML;
//                 }
//             } else {
//                 compareCallBack = function (rowA, rowB) {
//                     return rowB.cells[index].innerHTML - rowA.cells[index].innerHTML;
//                 }
//             }
//             break;
//         case 'string':
//             //logic for string;
//             if (asscending) {
//                 compareCallBack = function (rowA, rowB) {
//                     return rowB.cells[index].innerHTML > rowA.cells[index].innerHTML ? -1 : 1;
//                 }
//             } else {
//                 compareCallBack = function (rowA, rowB) {
//                     return rowB.cells[index].innerHTML > rowA.cells[index].innerHTML ? 1 : -1;
//                 }
//             }
//             break
//     }
//     tbodyrows.sort(compareCallBack);
//     table.append(...tbodyrows);
// }



// fetch('https://reqres.in/api/users', {
//     method: "POST",
//     body: {
//         "name": "Ros",
//         "job": "FE"
//     }
// })

// const form = document.getElementById('form');


// form.onsubmit = (e) => {
//     e.preventDefault();
//     const fields = ['name', 'surname', 'age', 'message'];
//     const name = document.getElementById('name').value;
//     const surname = document.getElementById('surname').value;
//     const age = document.getElementById('age').value;
//     // console.log(document.getElementById('age').value)
//     // console.log(document.getElementById('message').value)
//     // fields.forEach((item) => {
//     //     console.log(item)
//     //     dataToSend.append(item, document.getElementById[item].value);
// //     // });


// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: name,
//         body: surname,
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }

// function handleFormSubmit(event) {
//     event.preventDefault();

//     const data = new FormData(event.target);

//     const formJSON = Object.fromEntries(data.entries());
//     console.log(formJSON)

//     // for multi-selects, we need special handling

//     const results = document.querySelector('.results pre');
//     results.innerText = JSON.stringify(formJSON, null, 2);


// }

// const form = document.querySelector('form');
// form.addEventListener('submit', handleFormSubmit);


// console.log(axios)
// fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => console.log(data))
// axios('https://jsonplaceholder.typicode.com/posts').then(res => console.log('res from axios', res))

//event loop 



