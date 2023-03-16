var num = 1;
var temp;
var truecount = 0;
var failcount = 0;



var level = +prompt(`~~~~~~~ 재미있는 사칫연산 게임 ~~~~~~~
[즐겁게 문제를 푸시다가 지겨우시면 0을 누르세요~]
~~~~~~~~~~~~~ 난이도를 설정합니다. ~~~~~~~~~~~~~
[ 1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20) ]`);

if (level === 1) {
    while (true) {
        var random1 = Math.floor(Math.random() * 100) + 1;
        var random2 = Math.floor(Math.random() * 100) + 1;
        var random3 = Math.floor(Math.random() * 4) + 1;
        if (random1 === random2) {
            continue;
        }
        if (random2 > random1) {
            random1 = random2;
            temp = random1;
            random2 = temp;
        }
        if (random3 === 3) {
            var result = +prompt(`Q${num}. ${random1} + ${random2} = ??`);


            if (result === (random1 + random2)) {
                alert(`정답입니다!`);
                truecount++;
                num++;
            } else if (result === 0) {
                alert(`게임을 종료합니다!`);
                break;
            } else {
                alert(`틀리셨습니다!`);
                failcount++;
                num++;
            }
        }
        if (random3 === 1) {
            var result = +prompt(`Q${num}. ${random1} - ${random2} = ??`);


            if (result === (random1 - random2)) {
                alert(`정답입니다!`);
                truecount++;
                num++;
            } else if (result === 0) {
                alert(`게임을 종료합니다!`);
                break;
            } else {
                alert(`틀리셨습니다!`);
                failcount++;
                num++;
            }
        }
        if (random3 === 2) {
            var result = +prompt(`Q${num}. ${random1} x ${random2} = ??`);


            if (result === (random1 * random2)) {
                alert(`정답입니다!`);
                truecount++;
                num++;
            } else if (result === 0) {
                alert(`게임을 종료합니다!`);
                break;
            } else {
                alert(`틀리셨습니다!`);
                failcount++;
                num++;
            }
        }
        if (random3 === 0) {
            var result = +prompt(`Q${num}. ${random1} / ${random2} = ??`);


            if (result === Math.floor((random1 / random2))) {
                alert(`정답입니다!`);
                truecount++;
                num++;
            } else if (result === 0) {
                alert(`게임을 종료합니다!`);
                break;
            } else {
                alert(`틀리셨습니다!`);
                failcount++;
                num++;
            }
        }

    }
    alert(`정답횟수: ${truecount}회, 틀린횟수: ${failcount}회`);
}
if (level === 2) {
    while (true) {
        var random1 = Math.floor(Math.random() * 50) + 1;
        var random2 = Math.floor(Math.random() * 50) + 1;
        var random3 = Math.floor(Math.random() * 4) + 1;
        if (random1 === random2) {
            continue;
        }
        if (random2 > random1) {
            random1 = random2;
            temp = random1;
            random2 = temp;
        }
        if (random3 === 3) {
            var result = +prompt(`Q${num}. ${random1} + ${random2} = ??`);


            if (result === (random1 + random2)) {
                alert(`정답입니다!`);
                truecount++;
                num++;
            } else if (result === 0) {
                alert(`게임을 종료합니다!`);
                break;
            } else {
                alert(`틀리셨습니다!`);
                failcount++;
                num++;
            }
        }
        if (random3 === 1) {
            var result = +prompt(`Q${num}. ${random1} - ${random2} = ??`);


            if (result === (random1 - random2)) {
                alert(`정답입니다!`);
                truecount++;
                num++;
            } else if (result === 0) {
                alert(`게임을 종료합니다!`);
                break;
            } else {
                alert(`틀리셨습니다!`);
                failcount++;
                num++;
            }
        }
        if (random3 === 2) {
            var result = +prompt(`Q${num}. ${random1} x ${random2} = ??`);


            if (result === (random1 * random2)) {
                alert(`정답입니다!`);
                truecount++;
                num++;
            } else if (result === 0) {
                alert(`게임을 종료합니다!`);
                break;
            } else {
                alert(`틀리셨습니다!`);
                failcount++;
                num++;
            }
        }
        if (random3 === 0) {
            var result = +prompt(`Q${num}. ${random1} / ${random2} = ??`);


            if (result === Math.floor((random1 / random2))) {
                alert(`정답입니다!`);
                truecount++;
                num++;
            } else if (result === 0) {
                alert(`게임을 종료합니다!`);
                break;
            } else {
                alert(`틀리셨습니다!`);
                failcount++;
                num++;
            }
        }

    }
    alert(`정답횟수: ${truecount}회, 틀린횟수: ${failcount}회`);
}
if (level === 3) {
    while (true) {
        var random1 = Math.floor(Math.random() * 20) + 1;
        var random2 = Math.floor(Math.random() * 20) + 1;
        var random3 = Math.floor(Math.random() * 4) + 1;
        if (random1 === random2) {
            continue;
        }
        if (random2 > random1) {
            random1 = random2;
            temp = random1;
            random2 = temp;
        }
        if (random3 === 3) {
            var result = +prompt(`Q${num}. ${random1} + ${random2} = ??`);


            if (result === (random1 + random2)) {
                alert(`정답입니다!`);
                truecount++;
                num++;
            } else if (result === 0) {
                alert(`게임을 종료합니다!`);
                break;
            } else {
                alert(`틀리셨습니다!`);
                failcount++;
                num++;
            }
        }
        if (random3 === 1) {
            var result = +prompt(`Q${num}. ${random1} - ${random2} = ??`);


            if (result === (random1 - random2)) {
                alert(`정답입니다!`);
                truecount++;
                num++;
            } else if (result === 0) {
                alert(`게임을 종료합니다!`);
                break;
            } else {
                alert(`틀리셨습니다!`);
                failcount++;
                num++;
            }
        }
        if (random3 === 2) {
            var result = +prompt(`Q${num}. ${random1} x ${random2} = ??`);


            if (result === (random1 * random2)) {
                alert(`정답입니다!`);
                truecount++;
                num++;
            } else if (result === 0) {
                alert(`게임을 종료합니다!`);
                break;
            } else {
                alert(`틀리셨습니다!`);
                failcount++;
                num++;
            }
        }
        if (random3 === 0) {
            var result = +prompt(`Q${num}. ${random1} / ${random2} = ??`);


            if (result === Math.floor((random1 / random2))) {
                alert(`정답입니다!`);
                truecount++;
                num++;
            } else if (result === 0) {
                alert(`게임을 종료합니다!`);
                break;
            } else {
                alert(`틀리셨습니다!`);
                failcount++;
                num++;
            }
        }

    }
    alert(`정답횟수: ${truecount}회, 틀린횟수: ${failcount}회`);
}