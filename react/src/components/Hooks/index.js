// import axios from "axios";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Hooks.css";

const Hooks = (props) => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Bob");
  const [parentData, setParentData] = useState(props);
  const [clientX, setClientX] = useState(null);
  const [clientY, setClientY] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // console.log("Inside useEffect function");
    getOrder();
    window.addEventListener("mousemove", function test(e) {
      setClientX(e.clientX);
      setClientY(e.clientY);
    });
    console.log("First useEffect call");
    // console.log("parent data =", parentData.data);
    return () => {
      console.log("Component <Hooks> was unmounted");
      window.removeEventListener(test);
    };
  }, []); // it is a componentDidMount in class-based components

  useEffect(() => {
    console.log("Number was changed");
  }, [number, name]);

  useEffect(() => {
    setParentData(props);
  }, [props]);

  // useEffect(() => {
  //   console.log("Name was changed");
  //   // axios request or navigate or modaShow or paginate
  // }, []);
  // useEffect(() => {
  //   console.log(2);
  // });
  // useEffect(() => {
  //   console.log(3);
  // });

  const incrementNumber = () => {
    setNumber((prevNumber) => prevNumber + 1);
    navigate("/FAQ", { replace: false });
  };

  const changeName = () => setName((prevState) => prevState + " t ");

  const getOrder = async () => {
    const result = await axios(
      "https://beetroot-burger-app.herokuapp.com/orders"
    );
    console.log("result =", result);
  };

  return (
    <div className="hooks">
      {/* <h1>{userData.name}</h1> */}
      <h2>Hooks useEffect</h2>
      <h3>{number}</h3>
      <h3>{name}</h3>
      <h3>{parentData.data}</h3>
      <button onClick={incrementNumber}>Click me</button>
      <button onClick={changeName}>Change name</button>
      <h2>Client X offset: {clientX}</h2>
      <h2>Client Y offset: {clientY}</h2>
    </div>
  );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  // const setInitialData = () => {
  //   console.log("I set initial value");
  //   return 100;
  // };

  // let res = 100, bas = 200

  //   foo(res, bas)

  //   foo = () => {
  //    axios.
  //   }

  // const [number, setNumber] = useState(() => {
  //   console.log("from useState hook");
  //   // 2s 3s
  //   return 100;
  // }); // destructuring
  // const [isModalOpen, setIsModalOpen] = useState(true);
  //   const [userData, setUserData] = useState({ name: "Ros", age: 28 });

  //   if (true) {
  //     const [numb, setNum] = useState(); THIS IS BADDD
  //   }

  //   const fetchData = async () => await axios.get("");
  //   console.log(number);
  //   console.log(func);
  //   console.log(isModalOpen);
  //   console.log(userData);

  // const handleClick = () => {
  //   /// api calll
  //   /// fetch

  //   setNumber(100);
  //   console.log(number); // 20
  //   if (number > 20) {
  //     setNumber((prevNuber) => prevNuber + 1);
  //     setIsModalOpen(false);
  //   } else {
  //     setNumber(30);
  //     setIsModalOpen(true);
  //   }
  // };

  // logic
  // return (
  //   <div className="hooks">
  //     {/* <h1>{userData.name}</h1> */}
  //     <h3>{isModalOpen ? "Yes" : "No"}</h3>
  //     <h2>Hooks playground number = {number}</h2>
  //     <button onClick={handleClick}>Click me</button>
  //   </div>
  // );
};

export default Hooks;
