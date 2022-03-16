const clockTitle = document.querySelector(".js-clock");

function leftEveClock(){
  const currentDate = new Date(); /* JS에 현재 시간 가져오기 */
  const EveDate = new Date("2022-12-24"); /* 이브 날 시간 가져오기 */
  const getCurrentDate = currentDate.getTime(); /* 현재 시간을 불러오기 */
  const getEveDate = EveDate.getTime(); /* 이브 시간 불러오기 */
  const eveTimeLeft = getEveDate - getCurrentDate; /*  불러온 (이브 날 시간 - 현재 시간) = 이브 날까지 남은 기간(우리가 원하는 것) */

  const leftDays = Math.floor(eveTimeLeft / (1000*60*60*24)); /* 밀리초를 일로 변경 */
  const leftHours = Math.floor((eveTimeLeft / (1000*60*60)) % 24 -9); /* 밀리초를 시로 변경(9시간 차이) */
  const leftMinutes = Math.floor(eveTimeLeft / (1000*60) % 60); /* 밀리초를 분으로 변경 */
  const leftSeconds = Math.floor((eveTimeLeft / 1000) % 60); /* 밀리초를 초로 변경 */
  
  const stiringLeftHours = String(leftHours).padStart(2, "0");
  const stiringLeftMinutes = String(leftMinutes).padStart(2, "0");
  const stiringLeftSeconds = String(leftSeconds).padStart(2, "0");

  clockTitle.innerText = `${leftDays}d ${stiringLeftHours}h ${stiringLeftMinutes}m ${stiringLeftSeconds}s`;
}

setInterval(leftEveClock, 1000); /* 1000ms. 1000ms 는 1초(1s). */
