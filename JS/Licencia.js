// Seleccionar elementos del DOM
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

// Agregar clases al hacer clic en los botones
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Función para validar los formularios antes de la compra
function comprar() {
  const signinForm = document.querySelector(".sign-in-form");
  const signupForm = document.querySelector(".sign-up-form");

  const signinInputs = signinForm.querySelectorAll("input");
  const signupInputs = signupForm.querySelectorAll("input");

  let isSigninComplete = true;
  let isSignupComplete = true;

  signinInputs.forEach((input) => {
    if (input.value.trim() === "") {
      isSigninComplete = false;
    }
  });

  signupInputs.forEach((input) => {
    if (input.value.trim() === "") {
      isSignupComplete = false;
    }
  });
  
  // Validar si ambos formularios están completos
  if (isSigninComplete && isSignupComplete) {
    Swal.fire(
      'Éxito!',
      '¡Compra realizada con éxito!',
      'success'
    );
  } else {
    Swal.fire(
      'Error',
      'Por favor, complete todos los campos en ambos formularios para comprar.',
      'error'
    );
  }
}

// Agregar un listener para el evento "input" al campo de "Número de Tarjeta"
document.getElementById("numeroTarjeta").addEventListener("input", function (event) {
  // Remover cualquier carácter no numérico del valor del campo
  event.target.value = event.target.value.replace(/\D/g, "");
});


document.getElementById("cvv").addEventListener("input", function (event) {
  // Remover cualquier carácter no numérico del valor del campo
  event.target.value = event.target.value.replace(/\D/g, "");
});