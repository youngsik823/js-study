const userList = [
    {
        account: "abc1234",
        userName: "대길이",
        job: "추노",
        address: "서울",
        hobbys: ["수영", "축구", "테니스"],
    },
    {
        account: "banana",
        userName: "빠나나",
        job: "과일",
        address: "서울",
        hobbys: ["푸드파이팅", "테니스"],
    },
    {
        account: "park1234",
        userName: "주차왕",
        job: "발렛파킹",
        address: "경기",
        hobbys: ["족구", "축구", "테니스", "영화감상"],
    },
    {
        account: "fire",
        userName: "불꽃남자카리스마",
        job: "게이머",
        address: "서울",
        hobbys: ["독서", "테니스"],
    },
];

// 회원목록에서 회원정보를 출력하는 함수
function user() {
    userList.forEach((userInfo) => {
        console.log(userInfo.account);
    });
}
user();

// 총합 구하기

function sum() {
    let number = [10, 20, 30, 40];

    let total = 0;
    number.forEach((s) => {
        total += s;
    });

    return console.log(`총합: ${total}`);
}
console.log(sum());

function filter() {
    const filterArray = [];
    for (const user of userList) {
        if (user.address === "경기") {
            filterArray.push(user);
        }
    }
    return filterArray;
}
console.log(filter());

const newArray = userList.filter((adr) => adr.address === "경기");
console.log(newArray);

const appleBasket = [
    {
        color: "green",
        sweet: 13,
    },
    {
        color: "red",
        sweet: 14,
    },
    {
        color: "red",
        sweet: 11,
    },
    {
        color: "green",
        sweet: 6,
    },
    {
        color: "green",
        sweet: 7,
    },
    {
        color: "green",
        sweet: 9,
    },
];

const apple = appleBasket
    .filter(
        (filterApple) => filterApple.color === "green" && filterApple.sweet >= 9
    )
    .map(
        (mapApple) =>
            `이 사과는 ${mapApple.color}색이며 당도가 ${mapApple.sweet}입니다`
    );
console.log(apple);

// userList에서 서울사는 user들의
// 첫번째 취미만 배열에 모아서 리턴
// ['수영', '푸드파이팅', '독서']
// 회원의 첫번째 취미는  xxx입니다.

const users = userList
    .filter((user) => user.address === "서울")
    .map((user) => ({
        firstHobby: user.hobbys[0],
        name: user.userName,
    }))
    .forEach((info) => {
        `${info.userName}님의 첫번째 취미는 ${info.firstHobby}입니다.`;
    });

console.log(users);
