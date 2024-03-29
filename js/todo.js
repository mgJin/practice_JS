const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="toDos";
let toDos = [];

/**li와 span을 만들고 그것에 내용을 입력해주는 함수 */
function paintToDo(newTodoObj){
    toDoList.style.backgroundColor = "white";
    const li = document.createElement("li");
    
    // li.style.float = "left";
    li.id = newTodoObj.id;
   
    const span = document.createElement("span");
    // span.style.float = "left";
    span.innerText = newTodoObj.text;
    const button = document.createElement("button");
    
    button.style.backgroundColor="transparent";
    button.style.borderColor = "white";
    button.style.textAlign = "center";
    button.innerText="❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span); 
    li.appendChild(button);
    toDoList.appendChild(li);
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}



function deleteToDo(event){
    const li = event.target.parentNode; //node 즉 span의 부모인 li를 가져옴
    console.log(event);
    console.log(event.target);
    toDos = toDos.filter((todo)=>{return todo.id!==parseInt(li.id)});
    saveToDos();
    li.remove();
}

function handleToDoSubmit(event){
    event.preventDefault();
    const toDo = toDoInput.value;
    toDoInput.value= "";
    const newTodoObj = {
        text:toDo,
        id:Date.now()
    }
    toDos.push(newTodoObj);
    saveToDos();
    paintToDo(newTodoObj);
    
}

toDoForm.addEventListener("submit",handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !==null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

