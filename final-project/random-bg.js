const bgImage = [{
  bgimg: "1.jpg",
  todaysTea: "❤오늘의 추천 tea❤",
  tea: "은은하고 향긋한 그린티로 \n활기찬 하루를 시작해보아요!🍵💚",
}, 

{
  bgimg: "2.jpg",
  todaysTea: "❤오늘의 추천 음료❤",
  tea: "머리가 지끈지끈~ 블루베리 요거트 스무디로 \n상쾌하고 시원하게 기분 전환 해보아요!🍹💜",
}, 

{
  bgimg: "3.jpg",
  todaysTea: "❤오늘의 추천 tea❤",
  tea: "은은한 블루베리 과실향의 퍼플티로 \n기분 좋은 하루 보내세요!💜",
},

{
  bgimg: "4.jpg",
  todaysTea: "❤오늘의 추천 음료❤",
  tea: "딸기 라떼로 봄의 시작을 느껴보아요!🍓💗",
  }, 

{
  bgimg: "5.jpg",
  todaysTea: "❤오늘의 추천 tea❤",
  tea: "푸른 빛이 물드는 버터플라이 피 티💙 \n아이유 Blueming 노래를 들으며 \n푸른빛깔 설레이는 마음을 즐겨보는 건 어떨까요?",
}, 

{
  bgimg: "6.jpg",
  todaysTea: "❤오늘의 추천 tea❤",
  tea: "제가 좋아하는 웨딩 임페리얼! \n캬라멜과 초콜릿의 향긋하고 달콤한 조화로 \n특별하고 꿈같은 하루를 보내보아요!🧡🤎",
}, 

{
  bgimg: "7.jpg",
  todaysTea: "❤오늘의 추천 tea❤",
  tea: "사이다를 넣어 먹으면 더욱 더 시원한 레몬티로 \n상큼하고 비타민C가 가득한 하루되세요💛",
}, 

{
  bgimg: "8.jpg",
  todaysTea: "❤오늘의 추천 tea❤",
  tea: "비타민A가 풍부하고 \n면역력을 높여주는 히비스커스 꽃차로\n 건강한 하루를 시작하세요💝",
}
];

const tea = document.getElementById("tea");
const recommendedTea = document.querySelector("#tea span:first-child");
const todaysTea = document.querySelector("#tea span:last-child");

const randomBgImage = bgImage[Math.floor(Math.random() * bgImage.length)];

const createImgTag = document.createElement("img");

createImgTag.src = `img/${randomBgImage.bgimg}`;

document.body.appendChild(createImgTag);

recommendedTea.innerText= randomBgImage.todaysTea;
todaysTea.innerText= randomBgImage.tea;

