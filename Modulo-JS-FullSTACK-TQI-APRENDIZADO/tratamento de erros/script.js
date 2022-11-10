//ocorre em tempo de execução
//mensagem
//nome
//linha
//callStack

//DOMExption

//tratamento de erros

//Throw e

function tryC(error) {
  try {
  } catch (error) {
    throw error
  }
}

//Finally

//algo que executa de qualquer maneira depois do try catch  enao  é obrigatorio

//new Error(message, fileName, lineNumber) todos são parametros opcionais

const MeuErro = new Error('Mensagem Invalida!!')
MeuErro.name = 'InvalidMessage'

throw MeuErro
