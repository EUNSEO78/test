// String -> Array 타입 캐스팅 [변환]
// spread 연산자
const a = [..."abcdefg"];
console.log(a);

// Array -> String 타입 캐스팅 [변환]

// 1. 지양하기(2번 중요!)
a.toString(); // a,b,c,d,e,f,g

// 2. 지향하기(이거 쓰셈)
a.join(""); //abcdefg
a.join("!"); //a!b!c!d!e!f!g
