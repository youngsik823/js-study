
var a = 5;
var b = '5';

console.log(a === b);
// javascript 에서는 같다라는 기호를 ===를 써야한다.

console.log(a !== b);

console.log('=====================');

// == 비교는 결과 예측이 어려움
console.log('0' === '');
console.log(0 === '');
console.log('0' === 0);
console.log(false === 'false');
console.log(false === '0');

// 문자 대소비교
console.log('=====================');
console.log('ace' < 'ade');
// A : 65
// a : 97