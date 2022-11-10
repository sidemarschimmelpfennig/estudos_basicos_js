//DOM === Document Object Model
//BOM ===  Browser Object Model ou Window
//classe id  e tag

document.getElementById() //id
document.getElementsByTagName() //tag == retorna um array
document.getElementsByClassName() //class == retorna um array

document.querySelectorAll() //equivale a busca personalizada que gera um  um array

document.createElement(element) //criação de elementos
document.removeChild() //Remove um elemento
document.appendChild() //adiciona um elemento
document.replaceChild('new', 'old') //substitui um elemento

//==================Trabalhando com estilos============
//Estilo atraves de css
let meuElemento = document.getElementById('exe')

meuElemento.classList.add('novo-estilo') //adiciona classe
meuElemento.classList.remove('remove') //remove classe
meuElemento.classList.toggle('exe') //trabalha como interuptor se tiver a classe tira senao tiver coloque

document.getElementsByTagName('p').style.color = 'red'
document.getElementById('body1').style.display = 'none'

///=================EVENTOS

//qualquer ação que o usuario faz na pag

//mouseover,mouseout
//click, dbclick
//Change, load eventos de atualização
let botao = document.getElementById('meuBotao')
botao.addEventListener('click', outrafuncao)

//dentro do HTML é onclick= onnafrente no HTML
