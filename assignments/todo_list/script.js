const newTodoInput = document.querySelector("input");
const addTodoInputbutton = document.querySelector("button");
const newTodoInputList = document.querySelector("div.todos");
let count = 0;
addTodoInputbutton.addEventListener("click", () => {
  let content = document.createElement("p");
  content.setAttribute("key", count);
  content.innerHTML = newTodoInput.value;
  newTodoInputList.append(content);
  count = count + 1;
  content.addEventListener("click", content.remove);
});
