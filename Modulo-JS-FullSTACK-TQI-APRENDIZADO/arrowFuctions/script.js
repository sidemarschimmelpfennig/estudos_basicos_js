const helloWord = function () {
  return 'Hello World!'
}

const helloWord1 = () => {
  return 'Hello World!'
}

const helloWord2 = () => 'Hello World!'
///vALOR THIS SEMPRE É DO OBJETO GLOBAL
//o construtur nao pode ser utilizado
console.log(helloWord())
console.log(helloWord1())
console.log(helloWord2())
