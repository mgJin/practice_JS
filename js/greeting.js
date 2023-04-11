const loginForm = document.querySelector(".login-form");
const inputBox = document.querySelector(".login-form input")
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASS = "hidden";
const SAVED_USERNAME = "username";

function printing(event){
  loginForm.classList.add(HIDDEN_CLASS);
  event.preventDefault();
  localStorage.setItem(SAVED_USERNAME,inputBox.value);
  greeting_innerText();
}
function greeting_innerText(){
  greeting.innerText = `Hello ${localStorage.getItem(SAVED_USERNAME)}`;
  greeting.classList.remove(HIDDEN_CLASS);
}
if(localStorage.getItem(SAVED_USERNAME) === null){
  loginForm.addEventListener("submit",printing)
  
}else{
  loginForm.classList.add(HIDDEN_CLASS);
  greeting_innerText();
}