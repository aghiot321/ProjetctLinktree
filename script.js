// Função de toggle do modo dark/light
function toggleMode() {
  document.body.classList.toggle("light")

  // Aplica a classe light ao modal também
  const modalContents = document.querySelectorAll(".modal-content")
  modalContents.forEach((modalContent) => {
    if (document.body.classList.contains("light")) {
      modalContent.classList.add("light")
    } else {
      modalContent.classList.remove("light")
    }
  })
}

// Manipulação do Modal para o E-book
const ebookModal = document.getElementById("ebookModal")
const openEbookBtn = document.getElementById("openModal")
const ebookCloseSpan = ebookModal.getElementsByClassName("close")[0]
const ebookForm = document.getElementById("ebookForm")
const ebookEmailInput = document.getElementById("userEmail")
const ebookEmailError = document.getElementById("emailError")
const ebookResponseMessage = document.getElementById("responseMessage")

openEbookBtn.onclick = function () {
  ebookModal.style.display = "block"
  setTimeout(() => {
    ebookModal.classList.add("show")
  }, 10)
}

ebookCloseSpan.onclick = function () {
  ebookModal.classList.remove("show")
  setTimeout(() => {
    ebookModal.style.display = "none"
    resetModal(ebookEmailInput, ebookEmailError, ebookResponseMessage)
  }, 300)
}

// Manipulação do Modal para o Curso
const courseModal = document.getElementById("courseModal")
const openCourseBtn = document.getElementById("openCourseModal")
const courseCloseSpan = courseModal.getElementsByClassName("close")[0]
const courseForm = document.getElementById("courseForm")
const courseEmailInput = document.getElementById("courseEmail")
const courseEmailError = document.getElementById("courseEmailError")
const courseResponseMessage = document.getElementById("courseResponseMessage")

openCourseBtn.onclick = function () {
  courseModal.style.display = "block"
  setTimeout(() => {
    courseModal.classList.add("show")
  }, 10)
}

courseCloseSpan.onclick = function () {
  courseModal.classList.remove("show")
  setTimeout(() => {
    courseModal.style.display = "none"
    resetModal(courseEmailInput, courseEmailError, courseResponseMessage)
  }, 300)
}

// Função para validar e enviar formulário
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email.toLowerCase())
}

function resetModal(emailInput, emailError, responseMessage) {
  emailInput.value = ""
  emailError.textContent = ""
  responseMessage.textContent = ""
}

ebookForm.onsubmit = function (event) {
  event.preventDefault()
  ebookEmailError.textContent = ""
  ebookResponseMessage.textContent = ""

  const email = ebookEmailInput.value
  if (!validateEmail(email)) {
    ebookEmailError.textContent = "Por favor, insira um e-mail válido."
    return
  }

  // Simula o envio do e-book
  setTimeout(() => {
    ebookResponseMessage.textContent =
      "E-book enviado com sucesso para " + email + "!"
  }, 1000)
}

courseForm.onsubmit = function (event) {
  event.preventDefault()
  courseEmailError.textContent = ""
  courseResponseMessage.textContent = ""

  const email = courseEmailInput.value
  if (!validateEmail(email)) {
    courseEmailError.textContent = "Por favor, insira um e-mail válido."
    return
  }

  // Simula o envio das informações do curso
  setTimeout(() => {
    courseResponseMessage.textContent =
      "Informações sobre o curso enviadas com sucesso para " + email + "!"
  }, 1000)
}

// Fechar modais ao clicar fora
window.onclick = function (event) {
  if (event.target == ebookModal) {
    ebookModal.classList.remove("show")
    setTimeout(() => {
      ebookModal.style.display = "none"
      resetModal(ebookEmailInput, ebookEmailError, ebookResponseMessage)
    }, 300)
  }
  if (event.target == courseModal) {
    courseModal.classList.remove("show")
    setTimeout(() => {
      courseModal.style.display = "none"
      resetModal(courseEmailInput, courseEmailError, courseResponseMessage)
    }, 300)
  }
}
