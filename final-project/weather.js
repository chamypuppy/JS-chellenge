const API_KEY = "e128d87bc7e4263de3001e495697516c";

function onGeoOk(position){ 
  const lat = position.coords.latitude; /* 위도 */
  const lon = position.coords.longitude; /* 경도 */
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; 
  fetch(url)
    .then(response => response.json())
    .then(data => {
    const weather = document.querySelector("#weather span:first-child"); 
    const city = document.querySelector("#weather span:last-child"); 
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  }); 
}

function onGeoError(){
  alert("위치 정보를 찾을 수 없습니다. 날씨 정보를 원하시면 위치 정보를 허용해주세요.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); 