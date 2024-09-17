// Quiz 1
const year = window.prompt("몇년생인가요??"); // year 문자
const age = 2025 - Number(year);  // 숫자로 바꿔주기
window.console.log(`당신의 나이는 ${age}이군요!`);

// Quiz 2
const input_first = Number(prompt("첫 번째 숫자 입력"));
const input_second = Number(prompt("두 번째 숫자 입력"));
console.log(`합:${input_first+input_second}, 차:${input_first-input_second}, 곱:${input_first*input_second}`)

// Quiz 3
const side = Number(prompt("한변의 길이 입력"));
console.log(`정사각형의 넓이는 ${side*side}`)

// Quiz 4
const ice_americano = Number(prompt("아아 주문 갯수"));
const ice_latte = Number(prompt("라떼 주문 갯수"));
console.log(`총 가격은 ${ice_americano*1500 + ice_latte*2500}원 입니다`);
