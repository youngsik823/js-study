var num = alert(
    `~~~~~~~ 재미있는 UP&DOWN 게임 ~~~~~~~\n[ 1 ~ 50 사이의 무작위 숫자를 맞춰보세요 !!! ]`
);
var random = Math.floor(Math.random() * 50) + 1;
var minValue = 1;
var maxValue = 50;
var count = 5;
while (true) {
    var num = +prompt(`>>`);
    if (num < random) {
        alert(`UP!!!!`);
    } else if (num > random) {
        alert(`DOWN!!!!`);
    } else if (num === random) {
        alert(`딩동댕~~~~ !!`);
        break;
    }
    ++count;
    alert(`기회가 ${count}번 남았습니다.`);
}
