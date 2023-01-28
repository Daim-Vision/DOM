const div = document.createElement("div");
const div_2 = document.createElement("div");
const div_3 = document.createElement("div");

div.className = "red";
div_2.className = "green";
div_3.className = "blue";

div_3.textContent = "Я вложен";
div_2.append(div_3);
div.append(div_2);

console.log(div);
