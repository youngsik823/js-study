while(true) {
    var high = 1;
    var middle = 2;
    var low = 3;

    var init_count;

    while(true) {
        var level = +prompt(`난이도를 선택하세요 상(3번의 기회) 중(6번의 기회) 하(10번의 기회)`);

        if(level===high){
            init_count=3;
        }else if(level===middle){
            init_count=6;
        }else if(level===low){
            init_count=10;
        }else{
            alert(`다시 입력해주세요`)
            continue;
        }
        break;
    }

    var pr_count = init_count;

    var result = Math.floor(Math.random()*100) + 1;

    var minValue = 1;
    var maxValue = 100;

    while(true) {
        var user = +prompt(`숫자를 입력하세요 \n ${minValue}~${maxValue}`);
        if(user < minValue || user > maxValue ){
            alert(`다시 입력하세요`);
            continue;
        }
        pr_count--;
        
        if(user > result){
            alert(`DOWN !!!`);
            maxValue = user+1;
        }else if(user < result) {
            alert(`UP !!!`);
            minValue = user+1;
        }else if(user === result){
            alert(`정답입니다!!!`);
            break;
        }

        if(pr_count <= 0){
            alert(`Game OVER !!!`);
            break;
        }else {
            alert(`${pr_count}번의 기회가 남았습니다!`);
        }
       

    }
     break;
}