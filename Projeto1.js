const prompt = require('prompt-sync')();

console.clear();
console.log('Um atleta para bater o recorde de uma determinada competição, dividiu o circuito da prova em 5 etapas, se obtesse sucesso nas 5 etapas, voltaria com o recorde da prova para casa.');
console.log();
console.log('Assim que acabou a prova, o atleta perguntou ao seu treinador como ele tinha se saido na prova, e com base nas respostas do treinador o atleta descobriu como foi seu resultado!');
console.log();
let contador = 0;

while {
    pergunta != ""sim"
let pergunta1 = prompt('Consegui exito na primeira parte da prova? ').toLowerCase();
if (pergunta1 === "sim") {
    contador++
} else if (pergunta1 === "nao") {
    contador = contador + 0;
} else {
    console.log("Resposta inválida!");
}
console.log();
let pergunta2 = prompt('Consegui exito na segunda parte da prova? ').toLowerCase();
if (pergunta2 === "sim") {
    contador++
}else if (pergunta2 === "nao") {
    contador = contador + 0;
} else {
    console.log("Resposta inválida!");
}
console.log();
let pergunta3 = prompt('Consegui exito na terceira parte da prova? ').toLowerCase();
if (pergunta3 === "sim") {
    contador++
}else if (pergunta3 === "nao") {
    contador = contador + 0;
} else {
    console.log("Resposta inválida!");
}
console.log();
let pergunta4 = prompt('Consegui exito na quarta parte da prova? ').toLowerCase();
if (pergunta4 === "sim") {
    contador++
}else if (pergunta4 === "nao") {
    contador = contador + 0;
} else {
    console.log("Resposta inválida!");
}
console.log();
let pergunta5 = prompt('Consegui exito na última parte da prova? ').toLowerCase();
if (pergunta5 === "sim") {
    contador++
}else if (pergunta5 === "nao") {
    contador = contador + 0;
} else {
    console.log("Resposta inválida!");
}
console.log();
if (contador == 0) {
    console.log("Você falhou em todas as etapas e fracassou totalmente!");
 } else if (contador <= 2) {
        console.log("VocÊ foi ruim na prova, mas podemos melhorar!");
    } else if (contador = 3) {
        console.log("Se você tivesse se dedicado mais, poderia ter conseguido o recorde!")
    } else if (contador = 4) {
        console.log("Por pouco você não conseguiu, você chegou muito perto!");
    } else {
        console.log("Parabéns, você é o novo recordista mundial!");
    }
console.log();