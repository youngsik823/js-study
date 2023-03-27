
// 카드 배열

    const colorCard = ['#FF0000', '#FFFF00', '#00CC00', '#0000FF',
                     '#9900CC', '#FF0099', '#000000', 'FFFFFF',
                     '#FF0000', '#FFFF00', '#00CC00', '#0000FF',
                     '#9900CC', '#FF0099', '#000000', 'FFFFFF'];
// 카드 랜덤
    let RandomColor =[];
   
    while(colorCard.length > 0) {
        var rd = colorCard.splice(Math.floor(Math.random() * colorCard.length),1)[0];
            RandomColor.push(rd);
        }
        console.log(RandomColor);

// 박스 안에 카드 배열

const $randomBox  = [...document.querySelectorAll('.box')];
console.log($randomBox);
for (let i = 0; i < $randomBox.length; i++) {
    $randomBox[i].style.background = RandomColor[i];
}

///////////////////

function startGame() {
    
    const card = document.querySelector('.gameBox');
    document.querySelectorAll('#playBox').forEach((card, index) => { // 초반 카드 공개
        setTimeout(() => {
          card.classList.add('flipped');
        }, 1000 + 100 * index);
      });
      setTimeout(() => { // 카드 감추기
        document.querySelectorAll('.gameBox').forEach((card) => {
          card.classList.remove('flipped');
        });
        clickable = true;
        startTime = new Date();
      }, 5000);
}









// 클릭했을때 카드색상 비교
let click = document.querySelector('#startBtn');
click.onclick = function() {
    alert(`시작`);
}

$randomBox.onclick = function() {
    alert(`1`);
}
 


