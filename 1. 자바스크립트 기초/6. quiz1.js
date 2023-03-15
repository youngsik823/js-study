var number1 = +prompt(`첫번째 숫자를 입력하세요!`);
var number2 = +prompt(`두번째 숫자를 입력하세요!`);
var sum = 0;

if(number1 > number2) {
    var t;
    t = number1;
    number1 = number2;
    number2 = t;
}
for(var i = number1; i<=number2; i++) {
     sum += i;     
}
alert(`${number1} ~ ${number2}까지의 누적합: ${sum}`);

