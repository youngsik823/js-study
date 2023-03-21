var gamepeople = +prompt(`게임 인원 (2 ~ 4명) ==>`);
var player = [];

if (gamepeople >= 2 && gamepeople <= 4) {
    alert(`플레이어 이름을 등록합니다.`);
    for (var i = 0; i < gamepeople; i++) {
        player[i] = prompt(`${i + 1}번 플레이어 이름: `);
    }
    alert(`[${player}] 참가!`);
}

while (true) {
    var guncount = +prompt(`실탄 개수 (1 ~ 5개) ==>`);
    var gun = 6;

    for (var j = 0; j < gun; j++) {
        if (guncount >= 1 && guncount <= 5) {
            var rdplayer = Math.floor(Math.random() * (gamepeople - 1)) + 1;
            alert(`총을 받았습니다. ${player[rdplayer]}부터 시작합니다.`);
            while (true) {
                alert(
                    `[${player[rdplayer]}님의 턴!] 탄창을 회전합니다.\n# 엔터를 누르면 격발합니다.`
                );
                var random = Math.floor(Math.random() * (gun - 1)) + 1;
                if (random <= guncount && random >= 0) {
                    alert(`빵!! [${player[rdplayer]}]님 사망...RIP`);
                    guncount--;
                    gun--;
                    gamepeople--;
                    player.splice(player.indexOf(player[rdplayer]), 1);
                    if (guncount === 0) {
                        alert(`총알이 모두 소진되었습니다. 게임을 종료합니다.`);
                        alert(
                            `${player.length}명만 살아남았습니다. 게임을 종료합니다\n최후 생존자: ${player}`
                        );
                        break;
                    } else if (rdplayer > 1) {
                        alert(
                            `남은 인원으로 게임을 계속합니다.\n생존한 인원 : [${player}]`
                        );
                    } 
                } else {
                    alert(`...휴~~ 살았습니다.`);
                    gun--;

                    break;
                }
            }
        } else if(guncount>6){
            alert(`실탄 개수를 잘못입력하셨습니다.`);
            continue;
        }
    }
}
