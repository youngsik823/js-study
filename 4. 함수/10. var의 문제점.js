
// 1. 변수의 중복선언 허용
// var x = 10;
// var x = '김철수';

let x = 10;
// let x = '김철수';

console.log(`x: ${x}`);

// 2. 블록레벨 스코프 지원 x
let i = '안녕';

for (let i = 0; i < 3; i++) {
    console.log(`for문 내부 ㅑ: ${i}`);
}

console.log(`for문 바깥쪽 i: ${i}`);
// var을 쓰면 반복문 쓰고 난뒤에도 값이 적용되서 나온다.
// let을 쓰면 반복문 쓰고 난뒤에는 그 값이 사라진다.


// 3. 변수 호이스팅 : 변수선언문을 자동으로 맨위로 올림
// z = 100;
// console.log(z); 

// let z;
// let을 쓰면 변수 z를 위로 못올라가게 한다.

