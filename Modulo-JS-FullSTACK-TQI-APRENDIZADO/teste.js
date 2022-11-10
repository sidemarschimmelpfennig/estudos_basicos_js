function Array(a, b, c, d) {
  let arr = [b, c, d]
  return arr
}

function gets(...args) {
  let saidas = Array()
  return saidas
}

let input = gets(3, 7999, 8000, 8001)

let qtdEntradas = parseInt(input)
let nivelEnergia

for (let i = 0; i < qtdEntradas; i++) {
  input = gets(qtdEntradas[i])
  nivelEnergia = parseInt(input)

  if (nivelEnergia[i] > 8000) {
    print('Mais de 8000!')
  } else {
    print('Inseto!')
  }
}

function medeEnergia(qt, energiOne, energyTwo, energyThree) {
  const arr = [energiOne, energyTwo, energyThree]
  for (let i = 0; i > arr.length; i++) {
    let valor = arr[i]
    if (valor >= 8000) {
      return 'Inseto!'
    } else {
      return 'Mais de 8000'
    }
  }
}
console.log(medeEnergia(3, 7999, 8000, 8001))

function medeEnergia(energiOne, energyTwo, energyThree) {
  const arr = []

  for (let i = 0; i > arr.length; i++) {
    let valor = arr[i]
    if (valor >= 8000) {
      console.log('Inseto!')
    } else {
      console.log('Mais de 8000')
    }
  }
}
medeEnergia(7999, 8000, 8001)
