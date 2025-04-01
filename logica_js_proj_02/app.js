alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5; //parseInt(Math.random() * 10 + 1);
console.log(numeroSecreto);

let tentativas = 0;
let chute;

while(chute != numeroSecreto){
    chute = prompt('Escolha um numero de 1 a 10');

    if (chute == numeroSecreto){
        alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} após ${tentativas} tentativas!`);
        break;
    } else {
        tentativas ++;
        if (numeroSecreto > chute) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
}