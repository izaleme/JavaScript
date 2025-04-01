// DESAFIO: TORNAR O CODIGO DINÂMICO
alert('Boas vindas ao jogo do número secreto!');
let continueGame = true;

while (continueGame) {
    let numMax = parseInt(prompt('Digite o valor máximo possível para o jogo de adivinhação:'));
    let numeroSecreto = Math.floor(Math.random() * numMax) + 1;
    let tentativas = 1;
    let chute;

    if (numMax === null || isNaN(numMax) || numMax <= 0) // Valida se é um número válido
    {
        alert('Insira um número válido maior que zero para jogar!');
        continue; // Retorna ao início do loop
    }
    
    while(chute != numeroSecreto){''
        chute = prompt(`Escolha um numero entre 1 e ${numMax}:`);
    
        if (chute == null){
            continueGame = false;
            alert('Jogo finalizado.');
            break; // Encerra o loop do jogo
        }
        
        chute = parseInt(chute); // Converte chute para número

        if (chute == numeroSecreto){
            alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} após ${tentativas} ${tentativas === 1 ? 'tentativa' : 'tentativas'}!`);
            break;
        } else {
            if (chute > numeroSecreto) {
                alert(`O número secreto é menor que ${chute}`);
            } else {
                alert(`O número secreto é maior que ${chute}`);
            }
    
            tentativas ++;
        }
    }
}