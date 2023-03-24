import { gameData } from "./gameData.js";
import { caseUp, caseDown, correctAnswer } from "./checkAnswer.js";
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

export default gameStart;