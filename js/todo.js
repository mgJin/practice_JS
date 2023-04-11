const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
function handleToDoSubmit(event){
    event.preventDefault();
    const toDo = toDoInput.value;
    toDoInput.value= "";
}
toDoForm.addEventListener("submit",handleToDoSubmit);