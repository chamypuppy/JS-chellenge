const desserts = [
  {
    dessert: "How about eating cake?🍰",
    todaysDessert: "Today's recommended dessert",
    img: "cake.jpg",
    comment: "케이크는 제누와즈가 촉촉한 \n딸기 쇼트 케이크가 체고!🍰",
  },
  {
    dessert:"Purrr ~~ pudding🍮",
    todaysDessert: "Today's recommended dessert",
    img: "pudding.jpg",
    comment: "살짝 쓴 맛이 나는 캬라멜 시럽의 \n커스타드 푸딩은 입에서 살살 녹는답니다🍮💛",
},
  {
    dessert: "cookies",
    todaysDessert: "Today's recommended dessert",
    img: "cookie.jpg",
    comment: "🍪는 제가 만든 초코칩 쿠키가 \n제일 맛나요 ㅋㅋ",
},
  {
    dessert: "crepe",
    todaysDessert: "Today's recommended dessert",
    img: "crepe.jpg",
    comment: "🍓크레페에는 과일이랑 과자랑\n 아이스크림 이것저것 들어가고 \n바삭해서 좋아요🍦",
},
];


const dessertBox = document.querySelector("#dessert-box");
const dessertImg = document.getElementById("dessert-img");
const todaysDessert = desserts[Math.floor(Math.random() * desserts.length)];
const recommendedDessert = document.querySelector(".dessert span:first-child");
const dessertName = document.querySelector(".dessert span:last-child");

recommendedDessert.innerText = todaysDessert.todaysDessert;
dessertName.innerText = todaysDessert.dessert;

const img = document.createElement("img");
img.src = todaysDessert.img;
dessertImg.appendChild(img);

const commentDiv = document.createElement("div");
commentDiv.innerText = todaysDessert.comment;
dessertBox.appendChild(commentDiv);
