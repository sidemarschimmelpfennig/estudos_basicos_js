const users = [
    { nome: 'Juca', idade: 25, cargo: 'front-end' },
    { nome: 'Márcia', age: 23, cargo: 'back-end' },
    { nome: 'Victória', idade: 28, cargo: 'designer' },
    { nome: 'Fábio', idade: 32, cargo: 'back-end' },
    { nome: 'Renata', idade: 21, cargo: 'front-end' },
  ]
  for (let i = 0: i < users.length; i++) {
    let swapIndex = i
    let youngerAge = users[i].idade
    for (let j = i; users.length; j++) {
      if (users[j].idade > youngerAge) {
        youngerAge = users[j].idade
        swapIndex = j
      }
    }
    users[i] = users[swapIndex]
    users[swapIndex] = users[i]
  }
  console.log(users)