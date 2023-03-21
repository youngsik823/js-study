function levelSelect() {
    const questionNumber = 1; // 문제 번호
    const correctCount = 0; // 정답횟수
    const wrongCount = 0; // 오답횟수

var message = `~~~~~~~~ 난이도를 설정합니다 ~~~~~~~~~~~~
[1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20) ]`;
const level = +prompt(message);

// 난이도에 따른 숫자 최대값
let maxNumber;

if (level === 1) {
    maxNumber = 100;
} else if (level === 2) {
    maxNumber = 50;
} else if (level === 3) {
    maxNumber = 20;
} else {
    maxNumber = 9999;
}
}

function makeGameData() {
    return{
        firstNumber: Math.floor(Math.random() * maxNumber) + 1,
        secondNumber: Math.floor(Math.random() * maxNumber) + 1,
        markNum: Math.floor(Math.random() * 3),

    };
   

}

function startGame() {
    const gameData = makeGameData();
    levelSelect();

}

function randomAnswer() {
     while(true){
// 랜덤 정수 2개 생성
gameData.firstNumber;
gameData.secondNumber;
// 랜덤 부호를 결정할 정수 생성 : 0, 1, 2
gameData.markNum;
// 기호를 저장할 변수
let mark;
// 실제 정답
let realAnswer;

if (markNum === 0) {
    mark = '+';
    realAnswer = firstNumber + secondNumber;
} else if (markNum === 1) {
    if (firstNumber === secondNumber) continue;
    else if (firstNumber < secondNumber) {
        var temp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temp;
    }
    mark = '-';
    realAnswer = firstNumber - secondNumber;
} else {
    mark = 'x';
    realAnswer = firstNumber * secondNumber;
}
while (true) {
    // 사용자에게 문제를 내고 정답을 입력받기
    var userAnswer = prompt(`Q${questionNumber++}. ${firstNumber} ${mark} ${secondNumber} = ??`);

    // 아무것도 입력안하면 다시 입력
    if (userAnswer === '') {
        continue;
    }else {
        userAnswer = +userAnswer;
    }
    break;
}

// 게임 종료 조건
if (userAnswer === 0) {
    alert('게임을 종료합니다!');
    break;
}

// 정답 검증
if (userAnswer === realAnswer) {
    alert('정답입니다!!');
    correctCount++;
} else {
    alert('틀렸습니다!!');
    wrongCount++;
}
}

     }
    

while (true) {

   

   
} // end each game

alert(`정답 횟수: ${correctCount}회, 틀린 횟수: ${wrongCount}회`);

