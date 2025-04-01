// DESAFIO: TORNAR O CODIGO DINÂMICO

alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let tentativas = 1;
let chute;

while(chute != numeroSecreto){
    chute = prompt('Escolha um numero de 1 a 100');

    if (chute == numeroSecreto){
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

alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} após ${tentativas} ${tentativas === 1 ? 'tentativa' : 'tentativas'}!`);