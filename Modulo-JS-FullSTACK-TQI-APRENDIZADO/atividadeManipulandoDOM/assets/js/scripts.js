function changeMode() {
  procureClasses()
  changeText()
}

function procureClasses() {
  btnDark.classList.toggle(DarkModeClass)
  h1.classList.toggle(DarkModeClass)
  body.classList.toggle(DarkModeClass)
  footer.classList.toggle(DarkModeClass)
}

function changeText() {
  const ligthMode = 'Light Mode'
  const DarkMode = 'Dark Mode'
  if (btnDark.classList.contains(DarkModeClass)) {
    btnDark.innerHTML = ligthMode
    h1.innerHTML = DarkMode + ' ON'
    return
  }
  btnDark.innerHTML = DarkMode
  h1.innerHTML = ligthMode + ' ON'
}

const DarkModeClass = 'dark-mode'
const btnDark = document.getElementById('mode-selector')
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]

btnDark.addEventListener('click', changeMode)
Element.st
