
// 1 - crie uma função que retorne uma saudação matinal.

function morningGreeting() {
    console.log('Bom dia!');
}

// Chamando a função para verificar seu funcionamento

console.log(morningGreeting());

// 2 - Crie uma função que receba dois números e retorna a soma entre eles.

function soma(numero1, numero2) {
    return numero1 + numero2;
}
console.log(soma(3, 5));

// 3 - Crie uma função que receba dois números inteiros e retorne o menor valor entre eles.

function menorNumero(n1, n2) {
    if (n1 < n2) {
        return n1;
    }
    return n2;
}

console.log(menorNumero(8, 12));
console.log(menorNumero(18, 12));