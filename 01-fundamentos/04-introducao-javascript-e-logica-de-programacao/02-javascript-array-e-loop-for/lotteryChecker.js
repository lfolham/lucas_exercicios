
let studentGame = [21,26,19,30,33,60];
console.log('jogo do Tulio', studentGame)

let number1 = 20;
let number2 = 25;
let number3 = 18;
let number4 = 29;
let number5 = 33;
let number6 = 60;

let megaSenaNumbers = [number1,number2,number3,number4,number5,number6];
console.log('jogo sorteado', megaSenaNumbers);

let numberOfHits = 0;

for (let index = 0; index < megaSenaNumbers.length; index += 1) {
    let drawNumber = megaSenaNumbers[index];
    console.log('numero sorteado', drawNumber);

    for(let index2 =0; index2 < studentGame.length; index2 += 1)
    console.log('numero do tulio',studentNumber);

    if(studentNumber === drawNumber){
        numberOfHits + 1;
    }
}