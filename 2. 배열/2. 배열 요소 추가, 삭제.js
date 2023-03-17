

var pets =['멍멍이', '야옹이', '쩝쩝이'];

console.log(pets);

// pets[pets.length] = '징징이';

pets.push('징징이');
pets.push('어흥이');
pets.push('꼬부기', '콩콩이');
// 연결리스트 방식
// push는 Array만 할수 있다.

// elements 요소가 아니라 배열에 저장된 데이터들

console.log(pets);

// 맨 끝 데이터 삭제
pets.pop();

console.log(pets);

// shift() : 배열의 맨 첫번째 요소 제거
pets.shift();
console.log(pets);

// unshift() : 배열의 맨 첫번째 데이터 추가
pets.unshift('짝짝이');
console.log(pets);

