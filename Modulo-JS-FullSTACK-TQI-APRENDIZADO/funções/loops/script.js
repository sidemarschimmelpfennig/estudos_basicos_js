function numberPositive(num) {
  let result
  if (num < 0) {
    result = false
  } else {
    result = true
  }
  //compara tipo e valor
  switch (result) {
    case true:
      console.log(`o numero ${num} é um numero positivo`)
      break
    case false:
      console.log(`o numero ${num} é um numero negativo`)
      break
  }
}

numberPositive(-10)
