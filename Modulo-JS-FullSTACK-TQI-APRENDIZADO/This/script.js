//this dentro de um objeto ele se refere ao objeto
//sozinha é ao objeto global
//dentro da funçao tambem ao objeto global porem DA Função
//evento é o elemento  que recebeu aquele evento
//call
const myObj = {
  num1: 2,
  num2: 2
}

function soma(a, b) {
  console.log(this.num1 + this.num2 + a + b)
}

soma.call(myObj, 1, 2)

//Apply

const pessoa = {
  nome: 'Miguel'
}
const pessoas = {
  nome: 'Miguelito'
}
function somar(a, b) {
  console.log(this.nome)
}

somar.apply(pessoas)

//Bind
//Clona a etrutura da sua função e poe objeto passado como parametro

const retornaNomes = function () {
  return this.nome
}

let bruno = retornaNomes.bind({ nome: 'bruno' })

bruno()
console.log(bruno())
