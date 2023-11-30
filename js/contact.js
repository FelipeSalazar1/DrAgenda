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
  const fields = [nameField, emailField, telephoneField];
  const fieldNames = ["Nome", "Email", "Telefone"];

  fields.forEach((field, index) => {
    addClassError(field);
    if (field.classList.contains("error")) {
      field.style.border = "1px solid red";
      alert(`Por favor, preencha o campo ${fieldNames[index]}.`);
    }
  });

  if (!fields.some((field) => field.classList.contains("error"))) {
    fields.forEach((field) => {
      field.style.border = "#ccc";
      field.value = "";
    });
    text.innerHTML = "Obrigado por entrar em contato conosco!";
  }
}
