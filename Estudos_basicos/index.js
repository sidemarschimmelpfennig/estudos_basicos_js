
function teste(operator = selecao, num1 = numeone  , num2= numetwo ){
  if (operator === "soma"){
    document.body.innerHTML = (num1 + num2)
  }
   if (operator === "diminui"){
    document.body.innerHTML = (num1 - num2) 
  }
   if (operator === "multiplica"){
    document.body.innerHTML = (num1 * num2)
  }
   if (operator === "divide"){
    document.body.innerHTML = (num1 / num2)
  }
}

