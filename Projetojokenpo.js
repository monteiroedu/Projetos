console.clear();

const prompt = require('prompt-sync')();

//Projeto 2 - Jokenpô

let jogador1 = prompt(`Digite seu nome: `); //prompt para perguntar o nome do jogador
let jogador2 = "Computador";
const jogo = ['pedra', 'papel', 'tesoura'];
let vitoria = 0;
let derrota = 0
let empate = 0
let sorteio
let pontomaq = 0

console.log();

console.log(`${jogador1}, que tal jogarmos pedra, papel e tesoura? É bem simples, você escolhe quantas rodadas deseja jogar, a cada rodada você tem 3 opções, Pedra, Papel e Tesoura, onde pedra ganha da tesoura, mas perde para o papel, a tesoura ganha do papel, mas perde para a pedra e papel ganha da pedra, mas perde para a tesoura. E aí vamos jogar?`);

console.log();

let continua = "sim";
let pontosJogador1 = 0;
let pontosJogador2 = 0;
let pontosEmpate = 0;



while (continua.toLowerCase() == 'sim' || continua.toLowerCase() =="s") {
  let rodadas = prompt('Quantas rodadas você quer jogar?: ')

    for (let i = 0; i < rodadas; i++) {
        let escolha = prompt(
          'Digite a opção desejada: [0]Pedra, [1]Papel ou [2]Tesoura? '
          );

        console.log();

        if (escolha == 0) {
            escolha = jogo[0]
            console.log(`${jogador1} você escolheu : ${jogo[0]}`)
          } else if (escolha == 1) {
            escolha = jogo[1]
            console.log(`${jogador1} você escolheu :${jogo[1]}`)
          } else if (escolha == 2) {
            escolha = jogo[2]
            console.log(`${jogador1} você escolheu :${jogo[2]}`)
          }
          console.log()
        
          sorteio = Math.floor(Math.random() * 3)
          if (sorteio == 0) {
            maquina = jogo[0]
            console.log(`${jogador2} escolheu : ${jogo[0]}`)
          } else if (sorteio == 1) {
            maquina = jogo[1]
            console.log(`${jogador2} escolheu : ${jogo[1]}`)
          } else if (sorteio == 2) {
            maquina = jogo[2]
            console.log(`${jogador2} escolheu : ${jogo[2]}`)
          }
      
          if (
            (escolha == jogo[0] && maquina == jogo[2]) ||
            (escolha == jogo[1] && maquina == jogo[0]) ||
            (escolha == jogo[2] && maquina == jogo[1])
          ) {
            vitoria++
      
            console.log()
      
            console.log(`${jogador1} você GANHOU essa rodada!!!`);
          }
      
          if (
            (escolha == jogo[0] && maquina == jogo[1]) ||
            (escolha == jogo[1] && maquina == jogo[2]) ||
            (escolha == jogo[2] && maquina == jogo[0])
          ) {
            derrota++
            pontomaq++
            console.log()
      
            console.log(`${jogador1} você PERDEU essa rodada!!!`);
          }
          if (
            (escolha == jogo[0] && maquina == jogo[0]) ||
            (escolha == jogo[1] && maquina == jogo[1]) ||
            (escolha == jogo[2] && maquina == jogo[2])
          ) {
            empate++
      
            console.log();
      
            console.log('Empatou!!');
          }
      
          console.log();
      
          console.log('PLACAR DO JOGO:');
          console.log();
          console.log(vitoria, 'Vitória(s).');
          console.log(derrota, 'Derrota(s).');
          console.log(empate, "Empate(s).");
          console.log();
        }
        continua = prompt('Deseja jogar novamente?: '); //jogador optando por sim, recomeça o jogo
      }
      //Caso o jogador opte por não mais jogar, é dado o placar final do jogo!!!
      console.log('PLACAR FINAL: ');
      
      if (vitoria > derrota) {
        console.log( `PARABÉNS ${jogador1}, você ganhou com , ${vitoria} vitória(s)!!!`);
          
      } else if (derrota > vitoria) {
        console.log(`O CAMPREÃO foi o ${jogador2}, ${jogador1}, você perdeu!!!`);
       
      } else {
        console.log("Não houve vencedor, o jogo acabou EMPATADO!!!");
      }
