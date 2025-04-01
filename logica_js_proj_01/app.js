alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 4;
let chute = prompt('Escolha um número de 1 e 10');

if (numeroSecreto == chute) {
    console.log(`Isso aí! Você descobriu que o número secreto é ${numeroSecreto}!`);
}
else {
    console.log('Poxa, você errou!');
}