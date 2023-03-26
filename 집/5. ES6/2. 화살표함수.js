
// 함수 선언문 방식
// function multi(n1, n2) {
//     return n1 * n2;
// }

// 함수 표현식
// const multi = function(n1, n2) {
//     return n1 * n2;
// };

// 화살표 함수
const multi = (n1, n2) => n1 * n2;

const r1 = multi(10, 3);
console.log(`r1: ${r1}`);     

// function sayHello() {
//     console.log(`안녕하세요`);
// }

// const sayHello = function() {
//     console.log(`안녕하세요`);
// }

const sayHello = () => console.log(`안녕하세요`);

sayHello();

const kim = {
    name: '김철수',
    age: 30,
    greeting: sayHello, // greeting이 sayHello의 함수 기능을 가짐
    dance: () => console.log(`춤을 신나게 춥니다.`),
};

// console.log(kim.greeting());
kim.dance();

// 정수 1개를 전달하면 해당 정수의 제곱값을 리턴하는
// 화살표함수 pow 작성해보세요.

const pow = (num) => num ** 2;

console.log(pow(3));

// 함수 선언문과 함수 표현식(화살표함수)의 차이
console.log('============================');
const r2 = sub(20, 10); 

function sub(n1, n2) {
  return n1 - n2;
}
// 함수도 알아서 올라오기 때문에 호이스팅이 된다.
console.log(`r2 : ${r2}`);

const r3 = divide(30, 6);
const divide = (n1, n2) => n1 / n2;
// 화살표 함수는 올라가지 않기 때문에 오류
// 핼퍼함수를 쓸때 화살표 함수를 많이 쓴다.

console.log(`r3 : ${r3}`);
