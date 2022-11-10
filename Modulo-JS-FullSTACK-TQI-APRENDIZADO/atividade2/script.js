//função que substitui o numeros pares por zero  e tambem mantem os numeros zeros assim  informando o console das alterações

function substituiPares(arr) {
  if (!arr) return -1
  if (!arr.length) return -1

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      console.log('Voce ja é zero!!')
    } else if (arr[i] % 2 === 0) {
      console.log(`substituindo ${arr[i]} por 0...`)
      arr[i] = 0
    }
  }
  return arr
}
let array = [0, 1, 2, 3, 4, 6, 5, 9, 70]
substituiPares(array)

console.log(array)
