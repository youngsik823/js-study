

// OR 연산: 첫번째 truthy를 반환
console.log(`hello` || `world`);
console.log(0 || `안녕`);

// AND 연산: 첫번째 falsy를 반환
console.log(`==================`);

console.log(`HELLO` && `WORLD`);
console.log(null && `메롱`);

/*
    <h1>안녕하세요 우리 홈페이지에 오신걸 환영합니다.</h1>
    isLogin() && <h2>xxx님 안녕하세요!</h2>
    로그인 안하면 h1만 나오고 로그인 하면 h2까지 나온다.
    isLogin()이 flasy면 h1원만 나오고
    isLogin()이 truthy면 h2까지 나온다.
*/