var memberNum = +prompt('게임 인원(2~4명)');
var member = []
if (memberNum < 5 && memberNum >= 2) {

    for (var i = 0; i < memberNum; i++) {

        var memberName = prompt(`플레이어 이름을 등록합니다.
        ${i+1}번 플레이어 이름 : `)
        member.push(memberName)

    }
    alert(`${member} 참가!`)
};


var bullet = +prompt('실탄 개수(1~5개)')
 var startIndex = Math.floor(Math.random() * memberNum);
   
if (bullet > 0 && bullet <= 5) {
   
    // 장전완료!!!
    var bulletCase = [0, 0, 0, 0, 0, 0];
    for (var k = 0; k < bullet; k++) {
        bulletCase.splice(k, 1, 1);
    }

    // 첫번째순서 확정

    alert(`${member[startIndex]}부터 시작합니다.`);
    alert(`[${member[startIndex]}님의 턴!] 탄창을 회전합니다.`)
    member[startIndex] =  member.splice(startIndex,0,parseInt( Math.floor(Math.random() * (6))));
    alert(member);
    prompt('엔터를 누르면 격발합니다. Its high noon');
    // 첫번째순서부터 격발
    for (var j = startIndex; j < memberNum; j++) {
        if (member.indexOf(j) !== -1) {

            if (bulletCase[member[j]] === 1) {
            alert(`${member[j]}은 죽었습니다.`)
                // member[startIndex]은 죽었습니다.
                bulletCase = bulletCase.shift();
              
                // member = splice(member[startIndex], 1);
                
            } else if (bulletCase[member[j]] === 0) {
                //살았네~
                alert(`${member[j]}은 살았습니다.`)

            }
        } 
     }    
        // else if(member.indexOf(j) === -1){
        //     for (var k = 0; k < startIndex; k++) {
        //         if (bulletCase[member[k]] === 1) {

        //             // member[startIndex]은 죽었습니다.
        //             bulletCase = bulletCase.splice(Math.floor(Math.random() * (6)), 1);
        //             // member = splice(member[k], 1);
        //             alert(`${member[k]}은 죽었습니다.`)
        //         } else if (bulletCase[member[k]] === 0) {
        //             //살았네~
        //             alert(`${member[k]}은 살았습니다.`)
        //         }


        //     }

        // }

   

}


        //아니면 bulletCase의 인덱스를 고정한다. [0,0,0,0,0,0]
        //실탄이 들어있는경우 1, 실탄이 없는경우 0 이라고 생각한다.
        //bullet의 수만큼 bulletCase의 벨류값을 를 1로바꾼다.
        //ex) bullet 2이면 bulletCase=[1,1,0,0,0,0];
        //ex) bullet 3이면 bulletCase=[1,1,1,0,0,0];
        //member를 copy를뜨고
        //copyMember의 인덱스를 랜덤으로 돌리고
        // member[index]에게서 index값을 빼서 roulette[]에 대입하여 값이 1이면 죽는다.
        //그리고 splicing 해서 그 값을 뺀다.

