
// 외부 js 블러오기
import * as foo from './foo.js';
import * as bar from './bar.js';
// import {x, add} from './bar.js';
// import 할때 {}를 쳐준다.

// 메인 실행 파일
// 실행 코드만 입력: 함수 호출
// 함수 정의, 클래스 정의, 변수정의 XXXX

console.log(foo.add(10, 20)); 
console.log(`x1: ${bar.x}`);
console.log(`x2: ${foo.x}`);
