const h1 = document.querySelector("h1");


function clock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");

h1.innerText = `${hours}:${minutes}:${seconds}`;

};

setInterval(clock, 1000);
