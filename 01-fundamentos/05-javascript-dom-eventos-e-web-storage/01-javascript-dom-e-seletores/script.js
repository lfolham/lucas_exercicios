        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 
 
 Crie e execute uma função que mude a cor do quadrado vermelho para branco.
 Crie e execute uma função que corrija o texto da tag <h1>.
 Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
        */


 // Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)//

const segundoParagrafo = document.getElementsByTagName('p')[1];
function mudarTexto(element) {

    element.innerText = 'Trabalhando e feliz';
}

mudarTexto(segundoParagrafo)

//Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).//

function newColor(){
    const square = document.getElementsByClassName('main-content')[0];
    square.getElementsByClassName.backgroundColor = 

}

function maiúsculo() {
    let caixaAlta = document.getElementsByTagName('p');
    for(let index = 0. index < caixaAlta.length;index += 1)
}