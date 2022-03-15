const h2 = document.querySelector("h2");

h2.style.color = "white";

function resizer() {
  const innerWidth = window.innerWidth;
  if (innerWidth <= 700) {
    document.body.style.backgroundColor = "#0080ff";
  } else if (innerWidth > 700 && innerWidth <= 900) {
    document.body.style.backgroundColor = "purple";
  } else if (innerWidth > 900 && innerWidth <= 1000) {
    document.body.style.backgroundColor = "#FFD000";
  }
}

window.addEventListener("resize", resizer);
