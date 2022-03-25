const healths = [
  {
    healths: "💪상체(16분)🏋\n🏃유산소(11분)🏃‍♀️",
    todayshealth: "오늘은 상체 근력 + 유산소",
  },
  {
    healths:"🦵하체(16분)💃\n🏃유산소(11분)🏃‍♀️",
    todayshealth: "오늘은 하체 근력 + 유산소",
    img: "pudding.png",
},
  {
    healths: "🛌오늘은 푹 쉬세요~!🛀",
    todayshealth: "😄오늘은 쉬는 날!😁",
},
  {
    healths: "🙆‍♂️복부(7분)🙆\n🏃유산소(11분)🏃‍♀️",
    todayshealth: "오늘은 복부 운동 + 유산소",
},
  {
    healths: "🙇스쿼트 타바타(12분)🙇‍♀️\n🏃유산소(11분)🏃‍♀️",
    todayshealth: "오늘은 스쿼트 타바타 + 유산소",
},
];

const health = document.getElementById("health");
const toDaysHealth = healths[Math.floor(Math.random() * healths.length)];

const recommendedhealth = document.querySelector("#health span:first-child");
const recommendedExercise = document.querySelector("#health span:last-child");

recommendedhealth.innerText = toDaysHealth.todayshealth;
recommendedExercise.innerText =toDaysHealth.healths;