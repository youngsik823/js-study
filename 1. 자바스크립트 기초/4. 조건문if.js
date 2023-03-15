
//  1~100의 난수

//  Math.random()       -   0.0 <= ~ <  1.0
//  Math.floor(Math.random() * 100) 안쪽함수가 먼저 실행된다.

// 공식: x이상 y이하의 정수 난수
// Math.floor(Math.random() * (y - x + 1)) + x
var age = Math.random();

alert(`age: ${age}살`);


[1, 2, 3].map();

// var age = +prompt('당신의 나이는??');    //prompt는 String으로 받는다
//prompt앞에 +를 붙여주면 숫자변환이 되서 형변환이 number가 된다.
// alert(`내 나이 : ${age + 1}살`);

if (age > 19) {
    alert(`성인입니다.`);
    alert(`주류를 구매할 수 있습니다.`);
}
else {
    alert(`미성년자 입니다.`);
}
