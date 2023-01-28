const ul = document.createElement("ul");
ul.classList.add("list");
const li = document.createElement("li");
li.textContent = "Hello world!";
ul.prepend(li);

console.log(ul);
