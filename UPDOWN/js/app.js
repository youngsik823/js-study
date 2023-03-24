

// 게임 데이터
const gameData = {
    secret: makeRandomNumber(100),  //식제 정답
    answer: null,   // 사용자의 선택값
    min: 1,     // 최소범위설정
    max: 100    // 최대범위설정

}

// 램덤정수를 범위에 맞게 생성하는 함수
function makeRandomNumber(range) {
    return Math.floor(Math.random() * range) + 1;
}

// 정의부
function gameStart(iconCount) {

    const $numbers = document.getElementById('numbers'); // numbers인 아이디를 가져옴

    // 구슬을 iconCount개 만들어야 함.
    const makeIcon = () => {
        for (let n = 1; n <= iconCount; n++) {
            // <div class='icon'>1</div>
            const $icon = document.createElement('div'); //div 만듬
            $icon.classList.add('icon'); // 클래스 추가
            $icon.textContent = n; //text에 n로 써줌
            $icon.dataset.iconNumber = n;   // text가 한자여도 data속성으로 숫자를 가져온다.

            $numbers.appendChild($icon); //numbers에 icon을 넣어줌
        }

    };
    makeIcon();


    $numbers.onclick = e => { // 아이콘에 클릭 이벤트 부여하기

        if (!e.target.matches('#numbers .icon')) return; // #numvers .icon 이게 아니면 나가세요 (return)

        // console.log(`${e.target.dataset.iconNumber}번구슬 클릭함!`);
        // console.log(`${e.target.textContent}번구슬 클릭함!`); //e.target.textContent을 이용해서 text가 나오게함
        
        // 사용자가 클릭한 아이콘의 숫자를 answer에 저장
        gameData.answer = +e.target.dataset.iconNumber;
        console.log(gameData.secret);

        // 정답 검증 함수
        checkNumber(e.target);

   
    };

}

// 정답을 검증하는 함수
function checkNumber($target) {
    // gameData.secret
    const {secret, answer} = gameData;

    // 실제정답이랑 선택값을 비교
    if(secret === answer) {  // 정답인 경우
        // console.log('정답!');
        correctAnswer($target);

    } else if (secret > answer) {  //  up인 경우
        // console.log('업!');
        caseUp($target);

    } else {        // down인 경우
        // console.log('다운!');    
        caseDown($target);
    }
}

function caseUp($icon) {

    // 1. #begin의 숫자값이 클릭값 + 1로 변경
    document.getElementById('begin').textContent = +$icon.dataset.iconNumber +1;
    // 2. #down .selected 제거, #up에 추가
    document.getElementById('down').classList.remove('selected');
    document.getElementById('up').classList.add('selected');
    
    // 3. 자기 자신 아이콘 포함 이전 형제들 모두 삭제
    const $numbers = document.getElementById('numbers');
    
    // iterator 디자인 패턴 - null이 나올때까지 계속 반복
    let $delTarget = $icon;
    while($delTarget) {
         // $delTarget !==null     null 이면 flase
       
        const $nextTarget = $delTarget.previousElementSibling;
        $numbers.removeChild($delTarget);
        $delTarget = $nextTarget;
        // 나를 죽이고 그다음의 형제를 죽게 함
        
    }

    // $numbers.removeChild($icon);
    // $numbers.removeChild($icon.previousElementSibling);
    // 부모태그.removeChild(나의태그);
    // 부모태그.removeChild(나의이전형제);
    // 부모태그.removeChild(나의이전형제의이전형제);

}

function caseDown($icon) {

    // 1. #end의 숫자값이 클릭값 - 1로 변경
    document.getElementById('end').textContent = +$icon.dataset.iconNumber - 1;

    // 2. #up .selected 제거, #down에 추가
    document.getElementById('up').classList.remove('selected');
    document.getElementById('down').classList.add('selected');



}


function caseDown($icon) {

    // 1. #begin의 숫자값이 클릭값 - 1로 변경
    document.getElementById('begin').textContent = +$icon.dataset.iconNumber +1;
    // 2. #up .selected 제거, #down에 추가
    document.getElementById('up').classList.remove('selected');
    document.getElementById('down').classList.add('selected');
    // 3. 자기 자신 아이콘포함 다음형제들 모두 삭제
    const $numbers = document.getElementById('numbers');

    // iterator 디자인 패턴
    let $delTarget = $icon;
    while ($delTarget) {

        const $nextTarget = $delTarget.nextElementSibling;
        $numbers.removeChild($delTarget);
        $delTarget = $nextTarget;
    }
}

function correctAnswer($correctIcon) {
    // 1. finish아이디 박스에 class 'show' 부여
    const $finish = document.getElementById('finish');
    $finish.classList.add('show');  // 아이디 finish 에 class show를 달아줌
    
    // 2. #numbers 클릭 이벤트 해제
    document.getElementById('numbers').onclick = null;  // 아이디 numbers를 클릭 못하게 null값 줌
    
    // 3. 클릭한 아이콘에 id 'move' 부여
    $correctIcon.setAttribute('id', 'move');
}


// ============================================================//
// 실행부

(function () { // main 함수역할

    gameStart(100);

})();
//즉시실행함수