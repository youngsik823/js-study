

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

export {caseUp, caseDown, correctAnswer};