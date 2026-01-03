const input = document.getElementById("in");
const btn = document.getElementById("btn");
const listBox = document.getElementsByClassName("ul");
const todos = [];
function todolistRender() {
  listBox[0].innerHTML = "";

  todos.forEach((todo) => {
    const list = document.createElement("li");
    list.className = "mb-3 ";

    const div = document.createElement("div");
    div.className =
      "flex items-center justify-between bg-white p-3 rounded-lg shadow ";

    const leftBox = document.createElement("div");
    leftBox.className = "flex items-center gap-3";

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = todo.completed;
    checkBox.className = "w-4 h-4 cursor-pointer";

    const p = document.createElement("p");
    p.textContent = todo.text;
    p.className = "text-gray-800";
    p.style.textDecoration = todo.completed ? "line-through" : "none";

    checkBox.addEventListener("change", () => {
      todo.completed = !todo.completed;
      p.style.textDecoration = todo.completed ? "line-through" : "none";
    });

    const button = document.createElement("button");
    button.type = "button";
    button.innerText = "Delete";
    button.className =
      "bg-red-500 text-xs ml-10 text-brown-400 px-3 py-1 h-6 w-15 text-center rounded hover:bg-red-600 transition";

    button.addEventListener("click", () => {
      const index = todos.indexOf(todo);
      todos.splice(index, 1);
      todolistRender();
    });

    leftBox.append(checkBox, p);
    div.append(leftBox, button);
    list.appendChild(div);
    listBox[0].appendChild(list);
  });
}

btn.addEventListener("click", () => {
  if (input.value === "") return;

  todos.push({
    text: input.value,
    completed: false,
  });

  input.value = ""; // yelah input field clear garxah
  todolistRender();
  setdata();
});

function setdata(){
  localStorage.setItem("todos",JSON.stringify(todos)); //converting arrray to string because local storage only store string
}

function getdata(){
  const storedTodos = localStorage.getItem("todos");
  if(storedTodos){
    const parsedTodos = JSON.parse(storedTodos); // converting string back to array
    todos.push(...parsedTodos); // spreading the array elements into todos array
  }
}











































// What You’ve Learned (Important)

// getElementById() → single element

// getElementsByClassName() → collection → use [0]

// createElement('li') is required for <ul>

// DOM methods are case-sensitive








//    <style>
// .np {
// height: 50px;
// width: 500px;
// background-color: rgb(119, 149, 149);
// opacity:03;
//     }

// #btn{
// font-size: xx-small;
// height: 20px;
// width: 60px;
// border-radius:20px;
// border-style: none;
// color: blue;
// margin-left: 50px;
// margin-top: 20px;
// background-color: rgb(163, 112, 94);
// }
// div .np{
//     display: flex;
// justify-content: center;
// }
// input{
//     height: 20px;
//     width: 200px;
//     margin-top: 20px;
//     border-radius: 30px;
//     text-decoration: none;
//     border-style: none;
//     outline: none;
//     font-size: smaller;

// }
// #btn:active{
//     background-color: rgb(255, 89, 0);
//     transform: scale(1.5);
//     transition: btn all 5s;
// }
// .man{
//     display: flex;
//     justify-content: flex-start;
//     margin-top: 10px;
//     width:auto;
// }
// .delete{
// width: 130px;
// height:30px;
// border-radius: 20px;
// font-size: smaller;
// border-style: none;
// background-color: rgb(205, 48, 48);
// margin-top: 10px;
// margin-right: 40px;



// }


// </style>