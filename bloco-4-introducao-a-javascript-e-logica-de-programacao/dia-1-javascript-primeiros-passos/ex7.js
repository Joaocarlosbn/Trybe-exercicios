var nota = 30
if(nota >= 90 && nota < 101){
    console.log("A");
}else if(nota >= 80 && nota < 101){
    console.log("B");
}else if(nota >= 70 && nota < 101){
    console.log("C");
}else if(nota >= 60 && nota < 101){
    console.log("D");
}else if(nota >= 50 && nota < 101){
    console.log("E");
}else if(nota < 50 && nota > 0){
    console.log("F");
}else if(nota > 100 || nota < 0){
    console.log("erro");
}