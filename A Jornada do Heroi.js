const prompt = require('prompt-sync')();
console.clear();

//Em uma sala de aula uma professora pergunta aos seus alunos como foi as férias de cada um, e de acoro com as respostas avalia como foi as férias de seus alunos...

let respostaSim = 0;
let respostaNao = 0;

let nome = prompt(`Digite seu nome: `);
console.log();
console.log(`${nome}, queremos saber como foram suas férias, para isso vamos fazer 05 perguntas para saber o quanto você se divertiu, tudo bem? Então vamos lá, responda sim ou nao:`);
console.log();

console.log(`${nome}, você viajou durante suas férias? `);
let resposta1 = prompt().toLowerCase();
if (resposta1 == "sim") {
    respostaSim++
} else if (resposta1 == "nao") {
    respostaNao++
} else {
    console.log(`Resposta inválida!`);
    console.log(`${nome}, você viajou durante suas férias? `);
    let resposta1 = prompt().toLowerCase();
}
console.log();
console.log(`${nome}, você foi ao cinema durante suas férias? `);
let resposta2 = prompt().toLowerCase();
if (resposta2 == "sim") {
    respostaSim++
} else if (resposta2 == "nao") {
    respostaNao++
} else {
    console.log(`Resposta inválida!`);
    console.log(`${nome}, você foi ao cinema durante suas férias? `);
    let resposta2 = prompt().toLowerCase();
}
console.log();
console.log(`${nome}, você foi a praia durante suas férias? `);
let resposta3 = prompt().toLowerCase();
if (resposta3 == "sim") {
    respostaSim++
} else if (resposta3 == "nao") {
    respostaNao++
} else {
    console.log(`Resposta inválida!`);
    console.log(`${nome}, você foi a praia durante suas férias? `);
    let resposta3 = prompt().toLowerCase();
}
console.log();
console.log(`${nome}, você foi para algum show durante suas férias? `);
let resposta4 = prompt().toLowerCase();
if (resposta4 == "sim") {
    respostaSim++
} else if (resposta4 == "nao") {
    respostaNao++
} else {
    console.log(`Resposta inválida!`);
    console.log(`${nome}, você foi para algum show durante suas férias? `);
    let resposta4 = prompt().toLowerCase();
}
console.log();
console.log(`${nome}, você saiu para beber com os amigos durente suas férias? `);
let resposta5 = prompt().toLowerCase();
if (resposta5 == "sim") {
    respostaSim++
} else if (resposta5 == "nao") {
    respostaNao++
} else {
    console.log(`Resposta inválida!`);
    console.log(`${nome}, você saiu para beber com os amigos durente suas férias? `);
    let resposta5 = prompt().toLowerCase();
}
console.log();

console.log(`Tiveram ${respostaSim} respostas "sim"!`);
console.log();
if (respostaSim ==0) {
    console.log(`${nome}, você não fe nada durante suas férias e não se divertiu!!!`);
} else if (respostaSim <= 2) {
    console.log(`${nome}, você quse não se divertiu, suas férias foram ruins!!!`);
} else if (respostaSim == 3) {
    console.log(`${nome}, você se divertiu pouco, próximas férias procure se divertir mais!!!`);
 } else if (respostaSim == 4) {
        console.log(`${nome}, você se divertiu bastante, mas poderia ter divertido um pouco mais!!!`);
 } else {
     console.log(`${nome}, parabéns suas férias foram as melhores possíveis!!!`)
 }
    

