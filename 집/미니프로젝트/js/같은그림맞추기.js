// 카드 배열
const x = 4;
const y = 4;
let clickFlag = true;
let clickedOne = [];
let completedOne = [];

const colorCard = [
    "#FF0000",
    "#FFFF00",
    "#00CC00",
    "#0000FF",
    "#9900CC",
    "#FF0099",
    "#000000",
    "#FFFFFF",
    "#FF0000",
    "#FFFF00",
    "#00CC00",
    "#0000FF",
    "#9900CC",
    "#FF0099",
    "#000000",
    "#FFFFFF",
];

// 카드 랜덤
let RandomColor = [];

while (colorCard.length > 0) {
    var rd = colorCard.splice(
        Math.floor(Math.random() * colorCard.length),
        1
    )[0];
    RandomColor.push(rd);
}
// console.log(RandomColor);

// 박스 안에 카드 배열

const $randomBox = [...document.querySelectorAll(".back")];
// console.log($randomBox);
for (let i = 0; i < $randomBox.length; i++) {
    $randomBox[i].style.background = RandomColor[i];
}
const card = document.querySelector(".card");
card.addEventListener("click", (e) => {
    card.classList.add(flipped);
    console.log(back.style.background);
});

///////////////////
// const card = document.querySelectorAll(".card");

// card.addEventListener("click", function () {
//     if (clickFlag && !completedOne.includes(card)) {
//         //clickFlag가 true, 매치 안된 카드일 경우,
//         card.classList.toggle("flipped");
//         clickedOne.push(card); //선택한 카드 배열에 추가
//         if (clickedOne.length == 2) {
//             //선택한 카드가 2개일때
//             //색깔이 같으면 계속 오픈 시킴
//             if (
//                 clickedOne[0].querySelector(".back").style.backgroundColor ===
//                 clickedOne[1].querySelector(".back").style.backgroundColor
//             ) {
//                 console.log("matched!");
//                 completedOne.push(clickedOne[0]); //매치된 카드를 완성카드로 넣기
//                 completedOne.push(clickedOne[1]);
//                 clickedOne = []; //초기화
//                 document.querySelector(".wrap").innerHTML = ""; //전체 초기화
//                 completedOne = [];
//                 clickedOne = [];
//                 start;
//                 chosenColor = [];
//                 colors = backColor.slice();
//             }
//         } else {
//             //색깔이 다르면 1초 후 카드 닫기
//             clickFlag = false; //미리 클릭 방지
//             setTimeout(() => {
//                 clickedOne[0].classList.remove("flipped");
//                 clickedOne[1].classList.remove("flipped");
//                 clickFlag = true;
//                 clickedOne = []; //초기화
//             }, 1000);
//         }
//     }
// });
// document.querySelectorAll(".card").forEach((ele, index) =>
//     setTimeout(() => {
//         ele.classList.add("flipped");
//     }, 1000 + 100 * index)
// );
// //5초뒤에 닫기
// setTimeout(() => {
//     document
//         .querySelectorAll(".card")
//         .forEach((ele) => ele.classList.remove("flipped"));
//     clickFlag = true;
//     start = new Date(); //시작시간 재기
// }, 3000);
