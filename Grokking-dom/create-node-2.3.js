const arr = [
  {
    name: "Google",
    url: "https://google.com",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
  },
  {
    name: "intocode",
    url: "https://intocode.ru",
  },
];

const body = document.querySelector("body");
let render = (arr) => {
  const ul = document.createElement("ul");
  for (let i in arr) {
    const obj = arr[i];
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = obj.name;
    a.href = obj.url;
    li.append(a);
    ul.append(li);
    body.append(ul);
  }
  return ul;
};

console.log(render(arr));