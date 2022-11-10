const ex = function (parametro) {
  return parametro
}

//return retorna o valor da função

//funcção anonima

const some = (function (a, b) {
  return a + b
})(
  //IIFE (Immediately Invoked Function Expression)
  //nao precisa de execução ela é autoinvocavel
  function () {
    let name = 'name'
    return name
  }
)()

;(function (a, b) {
  let name = a + b
  return name
})(1, 2)

//Callbacks
//função passada como argumento para outra função

const calc = function (operator, num1, num2) {
  return operator(num1, num2)
}

const soma = function (num1, num2) {
  return num1 + num2
}

const resultadoSoma = calc(soma, 1, 2)
