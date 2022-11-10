//spread

function sum(a, b, c) {
  console.log(a + b + c)
}

const num = [1, 2, 3]

console.log(sum(...num))

//Rest usado para declarar a função

function confereTamanho(...args) {
  console.log(args.length)
}

confereTamanho()
confereTamanho(1, 2)
confereTamanho(1, 3, 6)

//Object Destructuring  entre {}

const user = {
  id: 20,
  displayName: 'Hello',
  fullName: {
    firstName: 'paul',
    lastName: 'Walker'
  }
}

function userID({ id }) {
  return id
}

function getFullName({ fullName: { firstName: first, lastName: last } }) {
  return `${first} ${last}`
}

getFullName()
