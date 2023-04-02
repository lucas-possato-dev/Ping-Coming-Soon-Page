const linksSocial = document.querySelectorAll("a");
const emailInput = document.querySelector(".email #email");
const submitEmail = document.querySelector(".submit");
const errorMessage = document.querySelector(".errorMessage");


function validarEmail(event) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
    errorMessage.classList.remove("error");
    emailInput.classList.remove("error");
  } else {
    event.preventDefault();
    errorMessage.classList.add("error");
    emailInput.classList.add("error");
  }
}

function handleClick(event) {
  event.preventDefault();
}


submitEmail.addEventListener("click", validarEmail); 

linksSocial.forEach((link) => {
  link.addEventListener("click", handleClick);
})