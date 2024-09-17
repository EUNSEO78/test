// function [함수]
function add100(x) {
  return x + 100;
}
function minus100(x) {
  return x - 100;
}

function wonyoungthinking(x) {
  return x + "완전 럭키비키잖아🥰";
}

function test(x, y) {
  return (x + y) ** 2;
}

function test1(x) {
  if (x % 2 == 0) {
    return "짝수";
  } else {
    return "홀수";
  }
}

function test2(x, y) {
  return x > y ? x : y;
}

function test3(x, y) {
  return x == y ? "같아요" : "달라요";
}

const a = add100(3000);
const b = minus100(1000);
const c = wonyoungthinking("수업을 하고 있는데 마침 휴강이라서 ");
console.log(c);
