//Esxemplo de demonstração de uso das variaveis e constantes em  js

// hoisting
numberOne = 1
console.log(numberOne)
var numberOne
//var === escopo global
var firstName = 'João'
if (firstName === 'João') {
  var firstName = 'Paulo'
}
console.log(firstName)
// let ===escopo de bloco
var lastName = 'DA Silva'

if (lastName === 'DA Silva') {
  let lastName = 'TEste'
}

console.log(`${firstName} ${lastName}`)
