const A = parseInt(gets());
const B = parseInt(gets());
var naturais = [];

function soma() {
 
  let num = 0;
  for (num = A; num <= B; ) {
    naturais.push(num);
    num++;
  }
}
soma();

total = naturais.reduce((prev, current)=>{
  return prev + current;
});
print(total);
