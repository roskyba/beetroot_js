import './App.css';
import MyFooter from './componetns/Footer';

function App() {

  let usersFetched = null;

  console.log(1 + 1);

  function calc() {
    return 5 + 10;
  }

  console.log(calc());


  const promiseUsers = fetch('https://jsonplaceholder.typicode.com/users');

  promiseUsers.then(res => res.json()).then(users => {
    usersFetched = users;
    console.log('users', usersFetched)
  })


  return (
    <>
      <div className="App">
        <p>Hello P</p>
        <h2>Hello H2</h2>
      </div>
      <MyFooter />
    </>
  );
}

export default App;
