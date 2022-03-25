const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

toDos = []; /* toDos라는 Array를 만드니까 로컬에 value가 여러 개 저장이 된다! */

function saveToDo(){
localStorage.setItem("savetodo", JSON.stringify(toDos));
}

function deleteToDo(event){
  const deleteli = event.target.parentElement;
  deleteli.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteli.id));
  saveToDo();
}

function paintToDo(toDoValue){
  const li = document.createElement("li");
  li.id = toDoValue.id;
  const span = document.createElement("span");
  span.innerText = toDoValue.text;
  li.appendChild(span);
  // li.style.listStyle = "none"; 리스트 스타일 없애기
  const button = document.createElement("button");
  button.innerText = "❌"
  li.appendChild(button);
  toDoList.appendChild(li);
  button.addEventListener("click", deleteToDo);
}

function submitToDoList(){
  event.preventDefault();
  const toDoValue = toDoInput.value;
  toDoInput.value = "";
  const newToDoValueObj ={
    text: toDoValue,
    id: Date.now(),
  }
  toDos.push(newToDoValueObj);
  saveToDo(newToDoValueObj);
  paintToDo(newToDoValueObj);
};

toDoForm.addEventListener("submit", submitToDoList);

const staySaveToDo = localStorage.getItem("savetodo");


if(staySaveToDo !== null){ /* staySaveToDo가 null이 아니면 */
  const parseToDo= JSON.parse(staySaveToDo);
  toDos = parseToDo; /* 로컬의 array value가 사라지지 않고 누적해서 쌓임 */
  parseToDo.forEach(paintToDo); /* 각각의 parseToDo를 paintToDo로 화면 상에 나타내어 줌*/
}