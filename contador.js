let readlineSync = require('readline-sync');
var valor;

valor = readlineSync.question("digite o valor correspondente a quantidade de alunos na sala:");
for(var i = 0; i <= valor; i++){
  if(i ==0){
      console.log("O número é zero");

    }else if(i%2 == 0){
     console.log ("o número" +i+" é par");
    }else{
        console.log("O número "+i+" é impar");
    }
}