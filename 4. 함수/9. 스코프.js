var x = 10; // 전역 변수 : 프로그램의 전체영역에서 사용가능

// 매개변수도 지역스코프를 가짐
function foo(z) {
    console.log(`지역변수 x 선언전: ${x}`);
    var y = 20 + x; // 지역 변수 : 해당 함수 안에서만 사용가능
    console.log(y - z);

    var x = '홍길동';
    console.log(`지역변수 x 선언후: ${x}`);

    // return y;
    // var x = '홍길동'; 를  var x;   x = '홍길동' 으로 만든후 var x;를 함수바로 밑까지 올린다.
    // var x = '홍길동'으로 쓰지말고 x = '홍길동' 으로 써야 의도적으로 흘러간다.
    // 함수 안에 지역변수가 우선이고 지역변수가 없으면 전역변수를 쓴다.
}


foo(50);

console.log(`함수호출 후 x의 값: ${x}`);

// console.log(z);
// console.log(y);


// 중첩 함수 : 함수안에 함수를 정의

function outer(m) {
    var n = 'outer local n';
    var v = 'outer local v';
    console.log(m, n, v);
    inner();
    // 핼퍼 함수 : 호출이 함수 내부로 제한됨 (캡슐화) (호출 순서를 정한대로 실행하게 해준다.)
    // 공개된 함수는 선언문을 쓰지만 숨겨진 함수는 화살표함수를 쓴다.
    function inner() {
        console.log(n);
        var m = 'inner local m';
        var v = 'inner local v';
        console.log(m);
        console.log(v);
    } 
}
var m = 'global m';
outer('outer param m');
