const submitButton = document.querySelector("#input-field #submit-button");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const telephoneField = document.getElementById("telephone");
const text = document.querySelector("#contact-form h2");

let firstSubmission = false;

submitButton.addEventListener("click", function() {
  validateForm();
  firstSubmission = true;
});

function addClassError(field) {
  if (firstSubmission && field.value == "") {
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
    return false;
  } else if (emailField.classList.contains("error")) {
    emailField.style.border = "1px solid red";
    alert("Por favor, preencha o campo Email.");
    return false;
  } else if (telephoneField.classList.contains("error")) {
    telephoneField.style.border = "1px solid red";
    alert("Por favor, preencha o campo Telefone.");
    return false;
  } else {
    text.innerHTML = "Obrigado por entrar em contato conosco!";
    nameField.value = "";
    emailField.value = "";
    telephoneField.value = "";

    return true;
  }
}
