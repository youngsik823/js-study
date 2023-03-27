
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


// 클릭했을때 카드색상 비교
let click = document.querySelector('#startBtn');
click.onclick = function() {
    alert(`시작`);
}

$randomBox.onclick = function() {
    alert(`1`);
}



