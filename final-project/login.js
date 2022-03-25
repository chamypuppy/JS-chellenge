const loginForm = document.getElementById("login-form");
const loginInput = document.getElementById("login-input");
const btnInput = document.getElementById("btn-input");
const h2= document.querySelector("h2");
const logoutForm = document.getElementById("logout-form");
const logoutInput = document.getElementById("logout-input");
const profilImg = document.getElementById("profil-img");


function clickLogoutPlease(){
  // event.preventDefault();
  localStorage.removeItem("username");
}

function paintUserName(username){
  loginForm.classList.add("hidden");
  h2.classList.remove("hidden");
  const img = document.createElement("img");
  img.src = "profil.png";
  profilImg.appendChild(img);
  logoutForm.classList.remove("logout-hidden"); /* 로그아웃 폼 보이기 */
  h2.innerText = `안녕하세요. ${username} 님 \n꽃샘추위 조심하시고\n오늘도 좋은 하루 되세요🍀`;
}


function enterLoginInput(){
  loginForm.classList.remove("hidden");
  event.preventDefault();
  const username = loginInput.value;
  loginInput.value = "";
  localStorage.setItem("username", username);
  paintUserName(username);
}

loginForm.addEventListener("submit", enterLoginInput);
logoutForm.addEventListener("submit", clickLogoutPlease);


const savedLocalName =  localStorage.getItem("username");


if(savedLocalName === null){
  loginForm.classList.remove("hidden");
  logoutForm.classList.add("logout-hidden");
} else {
  paintUserName(savedLocalName);
}