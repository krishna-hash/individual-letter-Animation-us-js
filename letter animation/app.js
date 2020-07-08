var text = document.querySelector(".hi");
var content = text.textContent;
console.log(content);
var splits = content.split("");
console.log(splits);
text.textContent = "";
for (let i = 0; i < splits.length; i++) {
  text.innerHTML += "<span>" + splits[i] + "</span>";
}
let char = 0;
var timer = setInterval(process, 50);

function process() {
  const span = document.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splits.length) {
    clearInterval(timer);
    timer = null;
    return;
  }
}
