/*
const increase = (function() {
    let count = 0;
    return () => ++count;
})(); //맨뒤에 ()는 호출

const decrease = (function() {
    let count = 0;
    return () => --count;
})();

console.log(increase());
console.log(increase());
console.log(decrease());

*/

// function counterClosure() {

//     let count = 0;

//     function increase() {
//         return ++count;
//     }
//     function decrease() {
//         return --count;
//     }
//     return {
//         increase,
//         decrease
//         // increase: increase,
//         // decrease: decrease
//     };
// }

// const counter = counterClosure();

// const increase = counter.increase;
// const decrease = counter.decrease;

// const counter = (() => {

//     let count = 0;

//     return { 
//         increase: () => ++count,
//         decrease: () => --count 
//     };
// })();

// const { increase, decrease } = counter;

// console.log(increase()); // 1
// console.log(increase()); // 2
// console.log(decrease()); // 1

// function counterWithCbClosure() {
//     let count = 0;

//     function process(callback) {
//         return count = callback(count); // (c => ++c) c 이 전역이고 callback(count)가 지역성을 띄기 때문에 count를 따로 저장하는 변수를 만들어줘야한다.
//     //  }                               // 함수안에 함수가 들어 가기 때문에

//     return process;
// }

// const counter_ = counterWithCbClosure();

// console.log(counter_(c => ++c ));   // 1
// console.log(counter_(c => c += 3));     // 4
// console.log(counter_(c => c ** 2));     // 16


const counter_ = (() => {    
    let count = 0;
    return callback => count = callback(count);
})();

console.log(counter_(c => ++c));    // 1
console.log(counter_(c => c += 3)); // 4
console.log(counter_(c => c **= 2));// 16
