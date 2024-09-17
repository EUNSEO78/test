// Quiz 1
const year = Number(prompt("태어난 연도 입력"));
const isAdult = 2025 - year >= 20 ? "성인입니다" : "미성년자입니다";
console.log(isAdult);

// Quiz 2
const height = Number(prompt("키"));
const canRide = height >= 140 ? "탑승 가능" : "탑승 불가능";
console.log(canRide);

// Quiz 3
const gender = prompt("성별 입력");
const age = Number(prompt("나이 입력"));
const army = gender == "남성" && age >= 20 ? "징집대상" : "징집대상아님";
console.log(army);

// Quiz 4
// >=20 성인, 19~14 청소년, 나머지 어린이
const age1 = Number(prompt("나이입력"));
const result = age1 >= 20 ? "성인" : age1 > 13 ? "청소년" : "어린이";
console.log(result);
