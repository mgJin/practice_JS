const loginForm = document.querySelector(".login-form");
const inputBox = document.querySelector(".login-form input")
function printing(event){
  console.log(event);
  event.preventDefault();
  const inputValue = inputBox.value;
  console.log(inputValue);
}
loginForm.addEventListener("submit",printing)
