// 배경색 5개 세로
const bg = (x) => {
  const div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.backgroundColor = x;
  document.body.appendChild(div);
};
["pink", "skyblue", "blue", "black", "red"].forEach((x) => {
  bg(x);
});

// 배경색 5개 가로
const container = document.createElement("div");
container.style.display = "flex";

const bg1 = (x) => {
  const div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.backgroundColor = x;
  return div;
};

["pink", "skyblue", "blue", "black", "red"].forEach((x) => {
  container.appendChild(bg1(x));
});

document.body.appendChild(container);
