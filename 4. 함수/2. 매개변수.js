/*
    description: x ~ y까지의 총합을 구하는 함수
    parameter:
        - begin: 누적총합의 시작값
        - end : 누적총합의 끝값
    return: 계산된 총합
*/

// 매개변수(parameter): 함수를 정의할 때 
// 외부에서 받아오는 값을 저장할 변수
function calcRangeTotal(begin, end) {

    // console.log(`x: ${begin}, y: ${end}`);

    var total = 0; // 총합을 저장할 변수
    for (var i = begin; i <= end; i++) {
        total += i;
    }
    return total;
}

// 인수 (argument) : 함수를 호출할 때 함수에게 전달하는 값이나 표현식
var result1 = calcRangeTotal(1, 10);
console.log(`result1: ${result1}`);
console.log(`result2: ${calcRangeTotal(1, result1 - 5)}`);


// 매개변수의 기본값
// ES6
function sayHello(language='한국어') {

    // ES5
    // language = language || '한국어';

    if (language === '한국어') {
        console.log('안녕하세요!');
    }
   else if (language === '영어') {
        console.log('HELLO!');
    }
   else if (language === '중국어') {
        console.log('따쨔하오!');
    }
   else {
        console.log('크크루삥뽕~!');
    }
}
sayHello();
