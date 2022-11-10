//exemplo de  funçao  cujo a finalidade por meio de parametro é calcular a idade dos dados usados relativos a um objeto
const pessoa = {
  nome: 'ana',
  idade: 25
}

const animal = {
  nome: 'doguinho',
  idade: 3
}

function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade`
}

console.log(calculaIdade.call(animal, 30))
