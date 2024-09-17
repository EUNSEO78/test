const lunch = prompt("오늘 점심 메뉴 입력");
console.log(`점심으로 ${lunch}을 먹었군요?`);

const base = Number(prompt("밑변 입력"));
const height = Number(prompt("높이 입력"));
console.log(`정삼각형의 넓이: ${(base * height) / 2}`);

const won = Number(prompt("원화 입력"));
const rate = 0.113;
console.log(`엔화: ${won * rate}`);
