const valor = 50
const venda = 2000
var lucro
lucro = venda * 0.8 - (valor * 1.2)
if(valor <= 0 || venda <= 0){
    console.log("erro");
}else{
    console.log(lucro);
}