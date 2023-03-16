/*
    시스템은 1~20사이의 무작위의 정수 2개를 생성하여 
    덧셈 문제를 출제해야 한다.

    사용자는 출제된 문제의 정답을 입력할 수 있어야 한다.

    시스템은 사용자의 입력값을 확인해서 정답인지 오답인지를
    알려줘야 한다.

    시스템은 지속적으로 다른 문제를 출제하여 사용자가 0을 입력할 때까지
    답을 계속 입력받고 검증해줘야 한다.
*/
// 문제 번호
var questionNumber = 1;

// 정답횟수, 오답횟수
var correctCount = 0, wrongCount = 0;

var message = `~~~~~~~~ 난이도를 설정합니다 ~~~~~~~~~~~~
[1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20) ]`;
var level = +prompt(message);

// 난이도에 따른 숫자 최대값
var maxNumber;

if (level === 1) {
    maxNumber = 100;
} else if (level === 2) {
    maxNumber = 50;
} else if (level === 3) {
    maxNumber = 20;
} else {
    maxNumber = 9999;
}

while (true) {

    // 랜덤 정수 2개 생성
    var firstNumber = Math.floor(Math.random() * maxNumber) + 1;
    var secondNumber = Math.floor(Math.random() * maxNumber) + 1;

    // 랜덤 부호를 결정할 정수 생성 : 0, 1, 2
    var markNum = Math.floor(Math.random() * 3);

    // 기호를 저장할 변수
    var mark;

    // 실제 정답
    var realAnswer;

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
} // end each game

alert(`정답 횟수: ${correctCount}회, 틀린 횟수: ${wrongCount}회`);


// var num = 1;
// var temp;
// var truecount = 0;
// var failcount = 0;



// var level = +prompt(`~~~~~~~ 재미있는 사칫연산 게임 ~~~~~~~
// [즐겁게 문제를 푸시다가 지겨우시면 0을 누르세요~]
// ~~~~~~~~~~~~~ 난이도를 설정합니다. ~~~~~~~~~~~~~
// [ 1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20) ]`);

// if (level === 1) {
//     while (true) {
//         var random1 = Math.floor(Math.random() * 100) + 1;
//         var random2 = Math.floor(Math.random() * 100) + 1;
//         var random3 = Math.floor(Math.random() * 4) + 1;
//         if (random1 === random2) {
//             continue;
//         }
//         if (random2 > random1) {
//             random1 = random2;
//             temp = random1;
//             random2 = temp;
//         }
//         if (random3 === 3) {
//             var result = +prompt(`Q${num}. ${random1} + ${random2} = ??`);


//             if (result === (random1 + random2)) {
//                 alert(`정답입니다!`);
//                 truecount++;
//                 num++;
//             } else if (result === 0) {
//                 alert(`게임을 종료합니다!`);
//                 break;
//             } else {
//                 alert(`틀리셨습니다!`);
//                 failcount++;
//                 num++;
//             }
//         }
//         if (random3 === 1) {
//             var result = +prompt(`Q${num}. ${random1} - ${random2} = ??`);


//             if (result === (random1 - random2)) {
//                 alert(`정답입니다!`);
//                 truecount++;
//                 num++;
//             } else if (result === 0) {
//                 alert(`게임을 종료합니다!`);
//                 break;
//             } else {
//                 alert(`틀리셨습니다!`);
//                 failcount++;
//                 num++;
//             }
//         }
//         if (random3 === 2) {
//             var result = +prompt(`Q${num}. ${random1} x ${random2} = ??`);


//             if (result === (random1 * random2)) {
//                 alert(`정답입니다!`);
//                 truecount++;
//                 num++;
//             } else if (result === 0) {
//                 alert(`게임을 종료합니다!`);
//                 break;
//             } else {
//                 alert(`틀리셨습니다!`);
//                 failcount++;
//                 num++;
//             }
//         }
//         if (random3 === 0) {
//             var result = +prompt(`Q${num}. ${random1} / ${random2} = ??`);


//             if (result === Math.floor((random1 / random2))) {
//                 alert(`정답입니다!`);
//                 truecount++;
//                 num++;
//             } else if (result === 0) {
//                 alert(`게임을 종료합니다!`);
//                 break;
//             } else {
//                 alert(`틀리셨습니다!`);
//                 failcount++;
//                 num++;
//             }
//         }

//     }
//     alert(`정답횟수: ${truecount}회, 틀린횟수: ${failcount}회`);
// }
// if (level === 2) {
//     while (true) {
//         var random1 = Math.floor(Math.random() * 50) + 1;
//         var random2 = Math.floor(Math.random() * 50) + 1;
//         var random3 = Math.floor(Math.random() * 4) + 1;
//         if (random1 === random2) {
//             continue;
//         }
//         if (random2 > random1) {
//             random1 = random2;
//             temp = random1;
//             random2 = temp;
//         }
//         if (random3 === 3) {
//             var result = +prompt(`Q${num}. ${random1} + ${random2} = ??`);


//             if (result === (random1 + random2)) {
//                 alert(`정답입니다!`);
//                 truecount++;
//                 num++;
//             } else if (result === 0) {
//                 alert(`게임을 종료합니다!`);
//                 break;
//             } else {
//                 alert(`틀리셨습니다!`);
//                 failcount++;
//                 num++;
//             }
//         }
//         if (random3 === 1) {
//             var result = +prompt(`Q${num}. ${random1} - ${random2} = ??`);


//             if (result === (random1 - random2)) {
//                 alert(`정답입니다!`);
//                 truecount++;
//                 num++;
//             } else if (result === 0) {
//                 alert(`게임을 종료합니다!`);
//                 break;
//             } else {
//                 alert(`틀리셨습니다!`);
//                 failcount++;
//                 num++;
//             }
//         }
//         if (random3 === 2) {
//             var result = +prompt(`Q${num}. ${random1} x ${random2} = ??`);


//             if (result === (random1 * random2)) {
//                 alert(`정답입니다!`);
//                 truecount++;
//                 num++;
//             } else if (result === 0) {
//                 alert(`게임을 종료합니다!`);
//                 break;
//             } else {
//                 alert(`틀리셨습니다!`);
//                 failcount++;
//                 num++;
//             }
//         }
//         if (random3 === 0) {
//             var result = +prompt(`Q${num}. ${random1} / ${random2} = ??`);


//             if (result === Math.floor((random1 / random2))) {
//                 alert(`정답입니다!`);
//                 truecount++;
//                 num++;
//             } else if (result === 0) {
//                 alert(`게임을 종료합니다!`);
//                 break;
//             } else {
//                 alert(`틀리셨습니다!`);
//                 failcount++;
//                 num++;
//             }
//         }

//     }
//     alert(`정답횟수: ${truecount}회, 틀린횟수: ${failcount}회`);
// }
// if (level === 3) {
//     while (true) {
//         var random1 = Math.floor(Math.random() * 20) + 1;
//         var random2 = Math.floor(Math.random() * 20) + 1;
//         var random3 = Math.floor(Math.random() * 4) + 1;
//         if (random1 === random2) {
//             continue;
//         }
//         if (random2 > random1) {
//             random1 = random2;
//             temp = random1;
//             random2 = temp;
//         }
//         if (random3 === 3) {
//             var result = +prompt(`Q${num}. ${random1} + ${random2} = ??`);


//             if (result === (random1 + random2)) {
//                 alert(`정답입니다!`);
//                 truecount++;
//                 num++;
//             } else if (result === 0) {
//                 alert(`게임을 종료합니다!`);
//                 break;
//             } else {
//                 alert(`틀리셨습니다!`);
//                 failcount++;
//                 num++;
//             }
//         }
//         if (random3 === 1) {
//             var result = +prompt(`Q${num}. ${random1} - ${random2} = ??`);


//             if (result === (random1 - random2)) {
//                 alert(`정답입니다!`);
//                 truecount++;
//                 num++;
//             } else if (result === 0) {
//                 alert(`게임을 종료합니다!`);
//                 break;
//             } else {
//                 alert(`틀리셨습니다!`);
//                 failcount++;
//                 num++;
//             }
//         }
//         if (random3 === 2) {
//             var result = +prompt(`Q${num}. ${random1} x ${random2} = ??`);


//             if (result === (random1 * random2)) {
//                 alert(`정답입니다!`);
//                 truecount++;
//                 num++;
//             } else if (result === 0) {
//                 alert(`게임을 종료합니다!`);
//                 break;
//             } else {
//                 alert(`틀리셨습니다!`);
//                 failcount++;
//                 num++;
//             }
//         }
//         if (random3 === 0) {
//             var result = +prompt(`Q${num}. ${random1} / ${random2} = ??`);


//             if (result === Math.floor((random1 / random2))) {
//                 alert(`정답입니다!`);
//                 truecount++;
//                 num++;
//             } else if (result === 0) {
//                 alert(`게임을 종료합니다!`);
//                 break;
//             } else {
//                 alert(`틀리셨습니다!`);
//                 failcount++;
//                 num++;
//             }
//         }

//     }
//     alert(`정답횟수: ${truecount}회, 틀린횟수: ${failcount}회`);
// }