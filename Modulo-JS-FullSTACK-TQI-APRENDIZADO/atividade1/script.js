//exercicio de função que verifica se a palavra de entrada é um palindromo

function verificaPalindromo(string) {
  if (!string) {
    console.log('String invalido!!!')
  } else {
    string.split('').reverse().join('') === string
  }

  if (string === true) {
    console.log(`parabens a palavra ${string} é um palindromo`)
  } else {
    console.log(`desculpe porem, ${string} não é  um palindromo!! `)
  }
}

verificaPalindromo('case')

//segunda solução

function verificaPalindromo2(string) {
  if (!string) return `a string ${string} é invalida`
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i])
      return `a palavra ${string} não é um palindromo`
  }
  return `a palavra ${string} é um palindromo`
}
console.log(verificaPalindromo2('sorvete'))
