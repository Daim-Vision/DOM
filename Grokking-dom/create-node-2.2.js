const body = document.querySelector("body");
let render = (arr) => {
  const ul = document.createElement("ul");
  for (let i of arr) {
    const li = document.createElement("li");
    li.textContent = i;
    ul.append(li);
    body.append(ul);
  }
  return ul;
};

console.log(render(["html", "css", "js"]));
