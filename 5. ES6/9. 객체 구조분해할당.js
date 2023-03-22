const emp = {
    empName: '빡빡이',
    age : 29,
    hireDate: '2014-01-01',
    birthDay: '1995-12-31'
};

// const empName = emp.empName;

// const {empName, birthDaym, age} = emp;
// 객체는 키값이라서 순서 상관 없다.
 

// console.log(`${emp.empName}님의 나이는 ${emp.age}살이고 생일은 ${emp.birthDay}입니다.`);
const {empName: en, birthDaym: bd, age: a} = emp;
console.log(`${en}님의 나이는 ${a}살이고 생일은 ${bd}입니다.`);

console.log(`=============================`);   

const {birthDay, age, ...others} = emp;

console.log(birthDay);
console.log(age);
console.log(others);

// 객체 안전 복사 : 스프레드

const copyEmp = { 
    ...emp,
    address: '서울시',
    hobbies: ['놀고먹기', '낮잠'],
    empName: '망둥어'   // 객체 상태를 바꿀때 기존꺼는 두고 수정할꺼만 쓰면 된다.
};

console.log(copyEmp);
