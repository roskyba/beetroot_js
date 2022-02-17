const manipulateDOM = () => {
  //   H1_ELEMENT.classList.toggle("heading_main");
  const li = document.createElement("li");
  li.textContent = "I am new li tag";
  LI_LIST.length;
  const UL_BLOCK = document.getElementsByClassName("list_block")[0];
  const copyUL = UL_BLOCK.cloneNode(false);
  console.dir(UL_BLOCK);
  UL_BLOCK.append(li);
};

// foo.call(this, 1, 2, 3); // apply invoker function immediately

// const boubded = foo.bind(this, 1, 2, 3, 45); // bind returns a functuins that we call later

// // ...
// // ...

// bounded();
// const H1_ELEMENT = document.getElementById("myID");
// console.log(document.getElementById("no_id_in_html"));

// console.dir(H1_ELEMENT);
// const MY_LIS = document.getElementsByTagName("li");

// for (let i = 0; i < MY_LIS.length; i++) {
//   console.dir(MY_LIS[i]);
// }
