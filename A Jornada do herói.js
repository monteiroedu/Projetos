const prompt = require('prompt-sync')();
console.log('\n');
console.log(
    'Hoje irei bater uma bolinha, com a turma da Blue EdTech. Antes disso tenho que preparar minha mochila com alguns itens.'
);
console.log('\n');
const pergunta = ['Pegou o meião? ', 'Pegou a chuteira? ', 'Pegou o uniforme? ', 'Pegou a luva? ', 'Pegou o garrafinha com água? ']
let resposta = []

for (let i = 0; i < pergunta.length; i++){
    let res = prompt(pergunta[i]);
    resposta.push(res);
    console.log('\n');
}
let cont = 0;
for (let i = 0; i < resposta.length; i++) {
    if (resposta[i] == 'sim') {
        cont++;
    }
}   
if (cont == 0) {
    console.log('Desse jeito não dar! Vou ser gandula.');
} else if (cont == 1 || cont == 2 ) {
    console.log('Ihhhh... Difícil, mas dar pra jogar.');
} else if(cont == 3){
    console.log('É... Não ta tão ruim.');
} else if (cont == 4) {
    console.log('Não ta perfeito, mas dar pra mostrar meu potencial.');
} else if (cont == 5) {
    console.log('Perfeito! Desse jeito vou conseguir um mundial pra o Palmeiras.');
}