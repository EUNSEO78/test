// 1. 배경색 4개로 해서 세로

const bg = (x) => {
  const div = document.createElement("div");
  div.style.backgroundColor = x;
  div.style.width = "100px";
  div.style.height = "100px";
  document.body.appendChild(div);
};
["yellow", "pink", "red", "skyblue"].forEach((x) => {
  bg(x);
});

// 2. 가로로
const container = document.createElement("div");
container.style.display = "flex";

const bg1 = (x) => {
  const div = document.createElement("div");
  div.style.backgroundColor = x;
  div.style.width = "100px";
  div.style.height = "100px";
  return div;
};

["yellow", "pink", "red", "skyblue"].forEach((x) => {
  container.appendChild(bg1(x));
});

document.body.appendChild(container);
