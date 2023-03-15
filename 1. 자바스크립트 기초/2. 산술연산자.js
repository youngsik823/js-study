

// 나머지 연산
console.log(27 % 5);

// 뒤에 숫자가 더크면 앞에 숫자가 나머지
console.log(4 % 10);

// console.log(77 % 0);
console.log(0 % 77);

// 거듭제곱 연산
var num = 2;
console.log(2 ** 3);
// 2의 3제곱

// 증감 연산자
var x = 3;
x++;
++x;
console.log(`x: ${x}`);

// 전위 연산, 후위 연산
var n1 = 10;
var n2 = n1++;

console.log(`n1: ${n1}, n2: ${n2}`);

var n3 = 10;
var n4 = ++n3;

console.log(`n3: ${n3}, n4: ${n4}`);

// 반복문에서 x+=1;을 안쓰고 x++; 쓰는이유는 속도 차이 때문에 쓴다.