const $screen = document.querySelector(".screen");
const $count = document.querySelector(".count");
const $log = document.querySelector(".log");
const recordArray = [];

let timeout;
let startTime, endTime, time;
let flag = true;
let $counter = 0;
const handleScreenClick = (e) => {
    if (flag === false) {
        return;
    }
    if ($screen.style.backgroundColor === "blue") {
        $screen.style.backgroundColor = "red";
        $screen.textContent = "대기";
        timeout = setTimeout(() => {
            $screen.style.backgroundColor = "green";
            $screen.textContent = "클릭하세요!!";

            start = new Date().getTime() / 1000;
        }, Math.floor(Math.random() * 2000) + 2000);
    } else if ($screen.style.backgroundColor === "red") {
        $screen.textContent = "빨랐어요!!";
    }
};
