const newTodoInput = document.querySelector("input");
const addTodoInputbutton = document.querySelector("button");
const newTodoInputList = document.querySelector("div.todos");
const completedTodosButton = document.querySelector(".btn1");
const uncompletedTodosButton = document.querySelector(".btn2");

addTodoInputbutton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((json) => {
      let li = `<tr><th>User id</th><th>Descrption</th><th>Status</th></tr>,`;

      json.forEach((user) => {
        li += `<tr>
                <td>${user.id} </td>
                <td>${user.title}</td>  
                <td>${user.completed ? "completed" : "pending"}</td>    
            </tr>`;
        document.getElementById("users").innerHTML = li;
      });
    })
    .catch((err) => console.log(err));
});

completedTodosButton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((json) => {
      let li = `<tr><th>User id</th><th>Descrption</th><th>Status</th></tr>,`;

      json.forEach((user) => {
        if (user.completed) {
          li += `<tr>
          <td>${user.id} </td>
          <td>${user.title}</td>  
          <td>completed-${user.completed}</td>    
          </tr>`;
          document.getElementById("users").innerHTML = li;
        }
      });
    })
    .catch((err) => console.log(err));
});
uncompletedTodosButton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((json) => {
      let li = `<tr><th>User id</th><th>Descrption</th><th>Status</th></tr>,`;

      json.forEach((user) => {
        if (!user.completed) {
          li += `<tr>
                <td>${user.id} </td>
                <td>${user.title}</td>  
                <td>Completed-${user.completed}</td>    
            </tr>`;
          document.getElementById("users").innerHTML = li;
        }
      });
    })
    .catch((err) => console.log(err));
});
