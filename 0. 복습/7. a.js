var ArrayName = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];

while (true) {
    var ModifyName = prompt(
        `현재 맴버: ${ArrayName}\n수정할 이름을 입력하세요.`
    );
    if (ArrayName.includes(ModifyName)) {
        var NewName = prompt(`새로운 멤버 이름을 입력하세요.`);
        ArrayName[ArrayName.indexOf(ModifyName)] = NewName;

        alert(`수정 완료!\n현재 멤버: ${ArrayName}`);
    } else {
        alert(`${ModifyName}은(는) 잘못된 이름입니다.\n다시 입력하세요!`);
    }
}
