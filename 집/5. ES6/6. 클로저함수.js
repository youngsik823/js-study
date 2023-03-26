// 자바스크립트의 함수는 함수를 리턴할 수 있음
// const calculator = (n1, n2) => () => n1 + n2;

// function calculator(n1, n2) {
//     return () => n1 + n2;
// }

// const zzz = calculator(10, 20);
// console.log(typeof zzz);
// console.log(zzz());

// const n = zzz();
// console.log(typeof n);
// console.log(`n: ${n}`);

// let count = 0;  // 카운팅 변수 (전역 변수)

// 카운트를 올리는 함수
// const increase = () => ++count;

// console.log(increase());     //1
// console.log(increase());     //2

// count = 999;

// console.log(increase());     //1000

// const increase = () => {
//     let count = 0;
//     return ++count;
// }

// console.log(increase());    //1
// console.log(increase());    //1
// console.log(increase());    //1

// const increaseClosure = () => {
//     let count = 0; // 지역 변수

//     return () => ++count;
// };

// const increase = increaseClosure();
// // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@이거 물어보기
// console.log(increase());
// console.log(increase());

// count = 999;

// console.log(increase());

// 클로저 함수를 쓰므로써 지역변수를 써도 1 1 1 이 나오는게 아니라
// 1 2 3이 나오게 한다 (상태유지)

// 즉시 실행 함수 : 정의와 동시에 호출
// const result = (function (n1, n2) {
//     return n1 + n2;
// })(5, 8);
// console.log(result);

// const increase = (() => {
//     let count = 0; // 지역 변수

//     return () => ++count;
// })();

// // const increaseClosure = () => {

//     let count = 0; // 지역 변수

//     return () => ++count;
// };

// console.log(increase());
// console.log(increase());
// console.log(increase());



const increase = (() => {
    let num = 0;
    return () => ++num;
})();

