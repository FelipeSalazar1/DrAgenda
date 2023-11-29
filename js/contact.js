const submitButton = document.querySelector("#submit-button");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const telephoneField = document.getElementById("telephone");
const text = document.querySelector("#contact-form h2");


submitButton.addEventListener("click", function () {
  validateForm();
});

function addClassError(field) {
  if (field.value == "") {
    field.classList.add("error");
  } else {
    field.classList.remove("error");
  }
}

function validateForm() {
  addClassError(nameField);
  addClassError(emailField);
  addClassError(telephoneField);

  if (nameField.classList.contains("error")) {
    nameField.style.border = "1px solid red";
    alert("Por favor, preencha o campo Nome.");
  }
  if (emailField.classList.contains("error")) {
    emailField.style.border = "1px solid red";
    alert("Por favor, preencha o campo Email.");
  }
  if (telephoneField.classList.contains("error")) {
    telephoneField.style.border = "1px solid red";
    alert("Por favor, preencha o campo Telefone.");
  }

  if (
    !telephoneField.classList.contains("error") &&
    !emailField.classList.contains("error") &&
    !nameField.classList.contains("error")
  ) {
    nameField.style.border = "#ccc";
    emailField.style.border = "#ccc";
    telephoneField.style.border = "#ccc";
    text.innerHTML = "Obrigado por entrar em contato conosco!";
    nameField.value = "";
    emailField.value = "";
    telephoneField.value = "";
  }
}
