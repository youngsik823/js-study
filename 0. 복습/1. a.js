var num1 = +prompt(`첫번째 숫자를 입력!`);
var num2 = +prompt(`두번째 숫자를 입력!`);
var sum = 0;
for (var i = num1; i <= num2; i++) {
    sum += i;
}
alert(`${num1} ~ ${num2}까지의 누적합: ${sum}`);
