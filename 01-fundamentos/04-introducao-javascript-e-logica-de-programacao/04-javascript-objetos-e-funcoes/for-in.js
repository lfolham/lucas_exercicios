
// for-in.js

let bolo = {
    massa: 'Chocolate',
    recheio: 'Morango',
    cobertura: 'Ninho',
    peso: '2kg'
};

// com o for/in

// a. A variavel key representa as chaves do objeto bolo.

for (let key in bolo) {
    console.log(key);
}


// b. Mas quando imprimimos o bolo[key], conseguimos acessar o valor que está em cada chave de bolo.

for (let key in bolo) {
    console.log(bolo[key]);
}

// c. E se quiséssemos unificar as duas infos para uma saída legível? 