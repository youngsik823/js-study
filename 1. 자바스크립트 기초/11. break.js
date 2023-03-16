for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 2; j++) {
        if (i === j) {
            break;
        }
        console.log(`[ ${i}, ${j}]`);
    }
}

outer: for (var i = 0; i < 3; i++) {
    inner: for (var j = 0; j < 2; j++) {
        if (i === j) {
            break inner;
            // break에 outer를 break를 걸면 콘솔에 아무것도 안나온다.
        }
        console.log(`[ ${i}, ${j}]`);
    }
}
console.log(`========================`);


// 50000번의 루프 중 1~100 사이의 랜덤 숫자중 30이
// 나오면 반복을 중간에 멈추고 싶다.


for (var i = 0; i < 50000; i++) {
    var rn = Math.floor(Math.random() * 10) + 1;
    console.log(rn);
    if (rn === 3) {
        console.log(`반복문 종료 : ${i}`);
        break;
        // break 되면 바로 나간다.
    }

}