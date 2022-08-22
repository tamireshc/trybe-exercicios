const readlineSync = require('readline-sync');
const wheight = readlineSync.question("What' your weight?")
const heigth = readlineSync.questionFloat("What' your height?")

const bmi = (wheight, heigth) => {
    const result = wheight/(heigth^2)
   if(result < 18.5 ){
    return 'Abaixo do peso (magreza)' + result
   }else if( result < 24.9){
    return 'Peso normal' + result
   }else if( result < 29.9){
    return 'Acima do peso (sobrepeso)'+ result
   }else if( result < 34.9){
    return 'Obesidade grau I'+ result
   }else {
    return 'Obesidade graus II, III e IV'+ result
   }
}

console.log(`Your's BMI is ${bmi(wheight,heigth)}`);