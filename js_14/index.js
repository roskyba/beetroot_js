// console.log('Initialize fetch request... Stand by....')

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(function callback(response) {
//         return response.json();
//     })
//     .then((res) => {
//         console.log('Res =', res)
//         console.log(res.title)
//     })

const getData = document.getElementById('btn');

const sendHTTPRequest = () => {
    // This function will hanlde sending HTTP request to BackEnd
    console.log('Sending HTTP request...');

    fetch('https://reqres.in/api/users')
        .then(r => r.json())
        .then(data => {
            console.log('Data =', data)
            console.log('We finished fetching. Data is available')
        })
        .catch(error => {
            console.log('ERROR =', error)
        });
}

getData.addEventListener('click', () => {
    console.log('We will get some data from server')
    // 
    sendHTTPRequest(); //
})


let myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
    "random animal": "Banana Shark"
};