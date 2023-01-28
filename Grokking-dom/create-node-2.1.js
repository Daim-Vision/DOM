const array = ["html", "css", "js"];
const ul = document.createElement("ul");

for (let i of array) {
  const li = document.createElement("li");
  li.textContent = i;
  ul.append(li);
}
console.log(ul);
