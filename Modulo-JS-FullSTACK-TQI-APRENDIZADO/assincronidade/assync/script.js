//é algo que nao ocorre ao mesmo tempo necessita um requerimento
//podemos fazer uma coisa ao mesmo tempo que fazemos outra no assincrono
//Promisses Objeto de processamento assincrono é uma promessa o resultado so vem com o retorno dessa promisse  tres estados Pending Fulfilled e Rejected
//assync define funçoes assincrona
//await signigfica aguarde ate essa promisse retornar
async function resolvePromisse() {
  const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve('resolvida')
    }, 2000)
  })

  const resolved = await myPromise
    .then(result => result + 'passando pelo then')
    .then(result => result + 'e agora acabou')
    .catch(err => console.log(err.message))
  return resolved
}

//============ APIS e  FETCH

//Aplication
//Programing
//Interce
//JSON == JavaScript Object
