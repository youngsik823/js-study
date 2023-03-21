var num = +prompt(`양의 정수를 입력!`);
var count = 1;
var result = "";
while (num >= count) {
    if (count % 2 === 1) {
        result += `+`;
    } else if (count % 2 === 0) {
        result += `-`;
    }
    count++;
}
alert(result);
