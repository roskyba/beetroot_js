// import axios from "axios";
import React, { useState } from "react";
import "./Hooks.css";

const Hooks = () => {
  // const setInitialData = () => {
  //   console.log("I set initial value");
  //   return 100;
  // };
  const [number, setNumber] = useState(() => {
    console.log("from useState hook");
    // 2s 3s
    return 100;
  }); // destructuring
  const [isModalOpen, setIsModalOpen] = useState(true);
  //   const [userData, setUserData] = useState({ name: "Ros", age: 28 });

  //   if (true) {
  //     const [numb, setNum] = useState(); THIS IS BADDD
  //   }

  //   const fetchData = async () => await axios.get("");
  //   console.log(number);
  //   console.log(func);
  //   console.log(isModalOpen);
  //   console.log(userData);

  const handleClick = () => {
    /// api calll
    /// fetch

    setNumber(100);
    console.log(number); // 20
    if (number > 20) {
      setNumber((prevNuber) => prevNuber + 1);
      setIsModalOpen(false);
    } else {
      setNumber(30);
      setIsModalOpen(true);
    }
  };

  // logic
  return (
    <div className="hooks">
      {/* <h1>{userData.name}</h1> */}
      <h3>{isModalOpen ? "Yes" : "No"}</h3>
      <h2>Hooks playground number = {number}</h2>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Hooks;
