// multi parameter: 매개변수가 n개인 경우

// 집합 자료구조를 매개변수로 사용
// [배열, 객체]

// n개의 정수를 전달하면 해당 정수의 총합을 구해주는 함수

// 스프레드 (ES6)
function addAll(...numbers) { // ...을 써야 []를 안써도 된다. (배열로 처리)
                            // 배열에 2개 이상이면 구분을 못해서 ...을 쓰면 안된다.
    var total = 0;

    for(var n of numbers) {
        total += n;
    }
    return total;
}

var r1 = addAll(1, 3, 5, 7, 10);
console.log(`r1 : ${r1}`);

function foo(arr1, arr2) {

}
foo([10,20], [500, 1000, 1500]);

console.log(`======================`);

// 함수의 리턴값은 언제나 하나
// 2개의 정수를 전달하면 덧셈, 뺄셈, 곱셈, 나눗셈의 결과를 리턴받고싶어

// function operateAll(n1, n2) {
//     var addResult = n1 + n2;
//     var subResult = n1 - n2;
//     var multiResult = n1 * n2;
//     var divideResult = n1 / n2;

//     var resultSet = [
//         addResult,
//         subResult,
//         multiResult,
//         divideResult
//     ];
//     return resultSet;
// }
function operateAll(n1, n2) {
    return {
        plus: n1 + n2,
        minus: n1 - n2,
        multiply: n1 * n2,
        divide: n1 / n2
    };
        // 순서가 중요할때 이렇게 써줘야 한다.
    
}
var result = operateAll(10, 5);
console.log(`덧셈결과 : ${result.plus}`);
console.log(`뺼셈결과 : ${result.minus}`);
console.log(`곱셈결과 : ${result.multiply}`);
console.log(`나눗셈결과 : ${result.divide}`);