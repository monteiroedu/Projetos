//npm install prompt-sync
const prompt = require('prompt-sync')();

console.clear();

//Projeto 03 - Você irá criar um jogo de ficção interativa que simule a rotina diária de um personagem. Você pode escolher entre rotinas matinais, rotinas de trabalho, rotinas de estudos, aventuras épicas, histórias assustadoras, entre outras. A ideia do jogo é que o jogador faça as escolhas para o seu personagem e o conduza pela história. Cada escolha irá gerar uma consequência diferente para o seu personagem. Você será responsável por determinar o inicio e término da história, além de avançar o tempo a cada escolha.

let player = prompt(`Digite seu nome: `);
let coordenador = "Carlos";
let diretor = "Lucas";
let professora = "Flávia";
let ficasl2 = "André";
console.log();
console.log(`⠀⠀⠀⠀⠀⠀⣀⠤⠔⠒⠂⠉⠉⠉⠉⠉⠉⠒⠢⢄⠀⠀⠀⠀⠀
⠀⠀⠀⢀⠔⣫⣴⣾⠛⠅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡇⠀⠀⠀⠀
⠀⠀⠀⡎⣼⣿⣿⣿⣛⡻⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀
⠀⠀⠀⢣⠘⣿⣿⣿⣭⡽⠏⠀⠀⠀⠀⠀⠀⠀⠀⠸⡀⣀⣀⡀⡀
⠀⠀⠀⠀⡇⠛⠛⣉⢠⠤⡒⡲⡪⠉⡩⠉⠉⠉⠙⢶⣷⡒⢠⣤⡜
⣤⡒⠒⡒⢧⡖⠉⠀⠀⠸⡇⠊⠀⠀⠇⠀⢠⡄⠀⠈⡏⠉⠀⠀⠁
⢱⢾⣇⠽⢻⠁⠀⠀⣄⠀⠀⠈⠋⠀⠀⡠⠎⠀⠀⠀⢰⠀⠀⠀⠀
⠀⠀⠀⠀⢸⠀⠀⠀⠈⠑⠒⠒⠒⠚⠉⠀⠀⠀⠀⠀⡘⢩⠀⠀⠀
⠀⠀⠀⢰⠙⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠋⠁⠀⠀⠀
⠀⠀⠀⠀⠉⠑⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠃⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠑⢢⣤⣀⣀⣀⣀⣠⣤⣶⣉⠀⠀⠀⠀⠀`);

console.log();
console.log(`${player}, você será Joãozinho, "o menino maluquinho”, uma criança que está sempre brincando e procurando se divertir, mas também está sempre se metendo em confusão e que vai precisar de sua ajuda para se livrar dos castigos dos professores e diretores do colégio em que estuda. Vamos se aventurar como Gabriel?`);
console.log();
jogador = {
    nome: 'Joãozinho',
    idade: 14,
    estrelas: 10,
    vitalidade: 80,
    alteravitalidade: function (ganho) {
        this.vitalidade += ganho;
    },
    alteraestrelas: function (ganho) {
        this.estrelas += ganho;
    },
};


function avancahora(atual, tempopassado = 1) {
    atual = atual + tempopassado;
    //console.log(`Se passaram ${atual} horas`);
    return atual; // Retorna a hora que recebeu como argumento depois de feita a soma
}

let horaAtual = 7;
let dia = 1;
let novoJogo = "";

do {

    horaAtual = 7;
    dia = 1;

    console.log(`${jogador.nome}, saindo de casa para ir a escola, encontra Mateus, um amigo de sua rua que lhe chama para matar aula, ${jogador.nome} pensa um pouco e: `);
    console.log();
    console.log(`
    1 - ${jogador.nome}, não ouve o amigo e vai para escola normalmente.
    2 - ${jogador.nome}, acompanha Mateus e os 02 pegam o ônibus em direção ao shopping para matar aula.
    3 - ${jogador.nome}, perde o ônibus que vai para a escola e acaba chegando atrasado na aula.`);

    resposta1 = +prompt();

    while (true) {
        if (resposta1 == 1) {
            console.log(`Muito bem ${jogador.nome} chegará na escola normalmente e não será penalisado.`);
            jogador.alteravitalidade(10);
            jogador.alteraestrelas(-1);
            break
        } else if (resposta1 == 2) {
            console.log(`${jogador.nome} irá com Mateus para o shopping matar aula e perderá um dia de aula.`)
            jogador.alteravitalidade(-20);
            jogador.alteraestrelas(-2);
            break
        } else if (resposta1 == 3) {
            console.log(`${jogador.nome} chegou atrasado na escola, foi chamado atenção pela diretora e professora! `)
            jogador.alteravitalidade(-15);
            jogador.alteraestrelas(-1);
            break
        } else {
            console.log(`Opção inválida!`);
            resposta1 = +prompt();
        }
    }

    horaAtual = avancahora(horaAtual, 7);

    console.log();
    //console.log(`${jogador.nome},  ${jogador.vitalidade}, ${jogador.estrelas}`);
    //console.log();
    console.log(`A tarde já em casa, ${jogador.nome}, precisa fazer sua lição de casa.`);
    console.log();
    console.log(`
    1 - ${jogador.nome}, fará a lição de casa e estudará paras as provas que se aproximam.
    2 - ${jogador.nome}, Fechará logo em seguida o caderno e jogará video game.
    3 - ${jogador.nome}, fechará o caderno e irá para a internet.
    4 - ${jogador.nome}, irá dormir. `);

    resposta2 = +prompt();

    while (true) {
        if (resposta2 == 1) {
            console.log(`Muito bem ${jogador.nome} fará a lição e terás boas notas nas provas.`);
            jogador.alteravitalidade(-10);
            jogador.alteraestrelas(0);
            break
        } else if (resposta2 == 2) {
            console.log(`${jogador.nome} vai passar a tarde jogando video game e não realizará suas tarefas de casa.`)
            jogador.alteravitalidade(-10);
            jogador.alteraestrelas(-1);
            break
        } else if (resposta2 == 3) {
            console.log(`${jogador.nome} passará a tarde na internet, não fará as tarefas de casa. `)
            jogador.alteravitalidade(-20);
            jogador.alteraestrelas(-1);
            break
        } else if (resposta2 == 4) {
            console.log(`${jogador.nome} passará a tarde dormindo. `)
            jogador.alteravitalidade(10);
            jogador.alteraestrelas(-1);
            break
        } else {
            console.log(`Opção inválida!`);
            resposta2 = +prompt();
        }
    }
    //console.log(horaAtual, dia);
    //console.log(`${jogador.nome},  ${jogador.vitalidade}, ${jogador.estrelas}`);

    horaAtual = avancahora(horaAtual, 6);

    console.log();
    console.log(`Já pela noite nosso ${jogador.nome} ainda terá algumas escolhas a fazer. `);
    console.log();
    console.log(`
    1 - ${jogador.nome}, vai jantar, fazer as tarefas da escola e irá dormir? 
    2 - Jantará, vai assistir um pouco de TV e irá dormir.
    3 - Vai jantar e logo em seguida vai dormir.
    4 - Vai sair para brincar um pouco, depois vai voltar pra casa e ir dormir.`);

    resposta3 = +prompt();

    while (true) {
        if (resposta3 === 1) {
            jogador.alteravitalidade(10);
            jogador.alteraestrelas(0);
            console.log(`${jogador.nome}, nem parece nosso "menino maluquinho" e sim uma criança comum!`);
            break
        } else if (resposta3 === 2) {
            jogador.alteravitalidade(15);
            jogador.alteraestrelas(-1);
            console.log(`${jogador.nome}, não fez a lição e foi dormir!`);
            break
        } else if (resposta3 === 3) {
            console.log(`${jogador.nome} só jantou e cansado foi dormir. `);
            jogador.alteraestrelas(-1);
            jogador.alteravitalidade(20);
            break
        } else if (resposta3 === 4) {
            console.log(`${jogador.nome} não fez a lição, não se alimentou e foi dormir. `)
            jogador.alteravitalidade(-30);
            jogador.alteraestrelas(-1);
            break
        } else {
            console.log(`Opção inválida!`);
            resposta3 = +prompt();
        }
    }
    console.log();
    //console.log(horaAtual, dia);
    //console.log(`${jogador.nome},  ${jogador.vitalidade}, ${jogador.estrelas}`);
    console.log(`São ${horaAtual} horas do ${dia}º dia!`);
    horaAtual = avancahora(horaAtual, 12); //Após passadas 24 horas, aumenta 1 dia
    dia++
    horaAtual = horaAtual - 24; //Passagem de tempo para passarmos ao segundo dia 
    console.log();
    //console.log(jogador.estrelas);
    //console.log();
    console.log(`São ${horaAtual} horas do ${dia}º dia!`);
    console.log();

    console.log(`Ao chegar a escola, nota-se que ${jogador.nome} encontra-se com o uniforme incompleto, eis que o 
    ${coordenador} o chama na coordenação e aplica um castigo.`);
    console.log(`O ${coordenador} irá sortear uma punição para ${jogador.nome}. `);
    console.log();
    let castigo = Math.floor(Math.random() * 3 + 1);
    if (castigo == 1) {
        jogador.alteraestrelas(0);
        console.log(`O ${jogador.nome} não perderá nenhuma estrela!`);
    } else if (castigo == 2) {
        jogador.alteraestrelas(-1);
        console.log(`O ${jogador.nome} perderá uma estrela!`);
    } else if (castigo == 3) {
        jogador.alteraestrelas(-2);
        console.log(`O ${jogador.nome} perderá duas estrelas!`);
    }
    console.log(`O ${jogador.nome} possui ${jogador.estrelas} estrelas!`);

    jogador.alteravitalidade(10);

    console.log();

    console.log(`Já em sala de aula a professora pergunta a ${jogador.nome} se ele fez sua tarefa de casa, ao ser respondido que não, sua professora, lhe dá até o fim da aula para que ele termine.`);

    console.log();

    console.log(`
    1 - ${jogador.nome}, vai conseguir terminar sua tarefa e entregar a professora. 
    2 - ${jogador.nome} vai conseguir terminar boa parte da tarefa, mas será penalisado. 
    3 - ${jogador.nome} não irá fazer a tarefa mesmo com uma segunda chance e será penalisado.`);

    resposta4 = +prompt();

    while (true) {
        if (resposta4 === 1) {
            jogador.alteraestrelas(0);
            console.log(`${jogador.nome}, não será penalisado e não perderá estrelas!`);
            break
        } else if (resposta4 === 2) {
            jogador.alteraestrelas(-1);
            console.log(`${jogador.nome}, conseguiu fazer uma boa parte da lição, mas perderá 01 estrela`);
            break
        } else if (resposta4 === 3) {
            jogador.alteraestrelas(-2);
            console.log(`${jogador.nome} não fez a tarefa mesmo com uma segunda chance e perderá 02 estrelas. `)
            break
        } else {
            console.log(`Opção inválida!`);
            resposta4 = +prompt();
        }
    }
    console.log();
    console.log(`O ${jogador.nome} possui ${jogador.estrelas} estrelas!`);
    //console.log(`A vitalidade do jogador é ${jogador.vitalidade}`);
    horaAtual = avancahora(horaAtual, 6);
    console.log(`São ${horaAtual} horas do ${dia}º dia!`);
    console.log();
    console.log(`A tarde ${jogador.nome} sai para brincar com os amigos e eles resolvem fazer um sorteio para saber do que irão brincar.`);
    console.log();
    let brincadeiras = ["jogar futebol", "brincar de pega-pega", "soltar pipa"];

    let brincar = Math.floor(Math.random() * 3 + 1);
    if (brincar == 1) {
        jogador.alteravitalidade(-20);
        console.log(`O ${jogador.nome} brincou de ${brincadeiras[0]}`);
    } else if (brincar == 2) {
        jogador.alteravitalidade(-15);
        console.log(`O ${jogador.nome} brincou de ${brincadeiras[1]}`);
    } else if (brincar == 3) {
        jogador.alteravitalidade(-12);
        console.log(`O ${jogador.nome} brincou de ${brincadeiras[2]}`);
    }
    console.log();
    console.log(`A vitalidade do jogador é ${jogador.vitalidade}`);
    console.log();
    jogador.alteravitalidade(10);
    horaAtual = avancahora(horaAtual, 5);
    console.log(`São ${horaAtual} horas do ${dia}º dia!`);

    console.log();

    console.log(`Depois de chegar em casa cansado de tanto brincar a tarde, ${jogador.nome}, chega para jantar e dependendo do que nosso personagem escolher pode trazer consequências ruins para sua vitalidade.`)
    console.log();
    console.log(`
    1 - Irá jantar batata frita e refrigerante.
    2 - Irá jantar pizza com refrigerante. 
    3 - Vai jantar Arroz, frango e salada.
    4 - Não irá jantar.`);
    console.log();
    resposta5 = +prompt();
    while (true) {
        if (resposta5 === 1) {
            jogador.alteravitalidade(-10);
            console.log(`${jogador.nome}, não fez uma refeição saudável e irá perder um pouco de vitalidade.`);
            break
        } else if (resposta5 === 2) {
            jogador.alteravitalidade(-12);
            console.log(`${jogador.nome}, jantou muito carboidrato e açúcar e vai perder um pouco de vitalidade.`);
            break
        } else if (resposta5 === 3) {
            console.log(`${jogador.nome} fez uma bela refeição e ganhou um pouco de vitalidade.`);
            jogador.alteravitalidade(20);
            break
        } else if (resposta5 === 4) {
            console.log(`${jogador.nome} não jantou e perdeu muita vitalidade. `)
            jogador.alteravitalidade(-20);
            break
        } else {
            console.log(`Opção inválida!`);
            resposta5 = +prompt();
        }
    }
    console.log(`São ${horaAtual} horas do ${dia}º dia!`);
    console.log(`A vitalidade do jogador é ${jogador.vitalidade}`);
    jogador.alteravitalidade(10);
    console.log();
    horaAtual = avancahora(horaAtual, 13);
    dia++
    horaAtual = horaAtual - 24;
    console.log(`São ${horaAtual} 6horas do ${dia}º dia!`);
    console.log();

    console.log(`${jogador.nome} mais uma vez chegou atrasado na escola, e como consequência foi mandado para a direção. A diretora que já está casada do nosso "menino maluquinho" foi olhar sua ficha. `);
    console.log();
    if (jogador.estrelas > 8) {
        console.log(`${jogador.nome} só levará uma advertência verbal e voltará para a sala de aula.`);
        jogador.alteravitalidade(0);
    } else if (jogador.estrelas > 6) {
        console.log(`${jogador.nome} levará uma advertência e perderá uma estrela.`);
        jogador.alteravitalidade(-1);
    } else if (jogador.estrelas <= 6) {
        console.log(`${jogador.nome} levará uma advertência, perderá duas estrelas e terá que fará um trabalho para não ser expulso da escola.`);
        let trabalhoExtra = (prompt(`Deseja fazer a tarefa para não ser expulso da escola? Digite "sim" ou "nao" `).toLowerCase());
        if (trabalhoExtra == "sim") {
            jogador.alteravitalidade(3);
        } else if (trabalhoExtra == "nao") {
            console.log(`Você será expulso da escola`);
        } else {
            while (trabalhoExtra != "sim" && trabalhoExtra != "nao") {
                let novaPergunta = prompt(`Digite uma opção válida!`).toLowerCase();
                trabalhoExtra = novaPergunta;
            }
        }
    }
    console.log();
    console.log(`O ${jogador.nome} não será reprovado!`);
    console.log();

    novoJogo = prompt(`Deseja jogar novamente? Digite sim para continuar e nao para sair!`).toLowerCase();
} while (novoJogo == "sim");
console.log();
console.log("FIM DE JOGO!!!");
console.log();


