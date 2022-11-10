const array =[ {arvore:{
user: 'auluno',
number: 12,
calculo: 17,
},
testa : {
user: 'teste',
number: 12,
calculo:25,
},}
]

console.log(array[length].arvore.number)

//========================================================================


teste("soma", 1, 2)
const pi = 3.14159
const circulo = (raio) => {
   var resultadoCir = console.log(pi*(raio* raio));
   return resultadoCir
}

circulo(14)
//========================================================================

const celsiusFarenheit = (tempCelsius) =>{
  console.log(((tempCelsius *1.8)+32) + '  é o valor em farenheit')

}


celsiusFarenheit(5)

//========================================================================


const farenheitCelsius = (tempFarenheit) =>{

        console.log(((tempFarenheit-32)/1.8) + ' é o valor em celsius')
}

farenheitCelsius(0)

//========================================================================



const maiorNumero = (numeroUm, numeroDois, numeroTres)=>{
      if ((numeroUm > numeroDois) && (numeroUm > numeroTres)){
          console.log(`${numeroUm} é o maior`) 
          return
      }
      else 
      if ((numeroDois > numeroTres) && (numeroDois > numeroUm)){
        console.log(`${numeroDois} é o maior`) 
        return
      }     
      else{
        console.log(`${numeroTres} é o maior`)
        return 
      }


}

maiorNumero(1 , 5 , 7)

//========================================================================


const funcaoMedia = (num1,num2,num3) =>{
  console.log ((num1 + num2 + num3 ) /3)
}

funcaoMedia(6,5,7)

  
//========================================================================

