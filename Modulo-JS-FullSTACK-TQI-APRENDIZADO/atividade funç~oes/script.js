//função que  retorna somente os alunos aprovados com media superior a dada de entrada como parametro e busca os elementos do array
const alunos = [
  {
    nome: 'Joao',
    nota: 4,
    turma: '18'
  },
  {
    nome: 'Sofia',
    nota: 9,
    turma: '18'
  },
  {
    nome: 'paulo',
    nota: 6,
    turma: '20'
  }
]

function alunosAprovados(arr, media) {
  let aprovados = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].nota >= media) {
      aprovados.push(arr[i].nome)
    }
  }
  return aprovados
}

console.log(alunosAprovados(alunos, 5))
