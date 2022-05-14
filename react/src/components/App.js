import './App.css';
import MyFooter from './Footer/Footer';
import Content from './Content/Content';
import Header from './Header/Header';

function App(props) {
  return (
    <>
      <div className="App">
        <Header />
        <Content name={props.name} />
        <MyFooter />
      </div>
    </>
  );
}

export default App;
