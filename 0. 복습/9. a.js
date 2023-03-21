const appleBasket = [{
    color: 'green',
    sweet: 13
},
{
    color: 'red',
    sweet: 14
},
{
    color: 'red',
    sweet: 11
},
{
    color: 'green',
    sweet: 6
},
{
    color: 'green',
    sweet: 7
},
{
    color: 'green',
    sweet: 9
},
];

// 사과중 녹색이면서 당도가 9 이상인 사과만 선별하여
// 이 사과는 xxx색이며 당도가 xxx입니다.
// 라는 문자열이 모여있는 배열을 리턴하세요.

const sweetGreenApple = appleBasket.filter(appleColor => appleColor.color === 'green' && appleColor.sweet >= 9)
.map(appleResult => `이 사과는 ${appleResult.color}색이며 당도가 ${appleResult.sweet}입니다`);

console.log(sweetGreenApple);

const userList = [{
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbys: ['수영', '축구', '테니스']
},
{
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobbys: ['푸드파이팅', '테니스']
},
{
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbys: ['족구', '축구', '테니스', '영화감상']
},
{
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbys: ['독서', '테니스']
},
];

// userList에서 서울사는 user들의 
// 첫번째 취미만 배열에 모아서 리턴
// ['수영', '푸드파이팅', '독서']
// 회원의 첫번째 취미는  xxx입니다.

const userHobby = userList.filter(user => user.address === '서울')
.map(firstHobby => firstHobby.hobbys[0]).forEach(hobby => console.log(`${hobby.userName} 첫번째 취미는 ${hobby.firstHobby}입니다.`));
console.log(userHobby);