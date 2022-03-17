const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const button = document.querySelector("button");
const bgColors = document.getElementById("bg-colors");



function handleClickBtn(){
  let ColorsArrayItem = Math.floor(Math.random() * colors.length);
  let ColorsArrayItemTwo = Math.ceil(Math.random() * colors.length);
  let randomColors = colors[ColorsArrayItem];
  let randomColorsTwo = colors[ColorsArrayItemTwo];
  const style = document.createElement("style");
  style.innerHTML=`body{background: linear-gradient(to right, ${randomColors}, ${randomColorsTwo});}`;
  document.head.appendChild(style);
  console.log(style.innerHTML)
};  



button.addEventListener("click", handleClickBtn);