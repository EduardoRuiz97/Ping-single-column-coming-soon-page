let buttonSubmit = document.querySelector(".main__container__submit");

function checkEmail() {
let userEmail = document.querySelector(".main__container__email[type='email']");
let warningAlert = userEmail.nextElementSibling;
let regexp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  if (regexp.test(userEmail.value) == false) {
    userEmail.classList.add("warning");
    warningAlert.classList.add("warning__show");
    userEmail.placeholder = "example@email.com"
    userEmail.addEventListener("click", ()=>{
      userEmail.value = ""
      userEmail.classList.remove("warning");
    }) 
  } else {
    warningAlert.classList.remove("warning__show");
    userEmail.value = ""
  }

}

buttonSubmit.addEventListener("click", (event)=> {
  checkEmail();
})
