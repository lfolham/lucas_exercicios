let person = {
    name: 'Marcelo',
    birthDate: '29/10/1970',
    ayeColor: 'Verdes',
    height: '1.79',
    local: {city: 'Savador', state: 'Bahia'},
}

// Acessando / Alterando propriedades de um objeto

console.log(person);
console.table(person);
console.log(person.name);
console.log(person.local.city);

// a. Notação por ponto: Alterando valor com objeto.propeidade

person.bloodType = 'A+';
console.log(person);

// b. Notação por colchetes: Alterando valor com o objeto ['propeidade]

person['sport'] = 'Natação';
person['ayeColor'] = 'Azuis';
console.log(person);

