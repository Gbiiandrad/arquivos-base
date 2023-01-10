const listaLivros = require('./array');
const trocaLugar = require('./encontraMenores');

function quickSort(arry, esquerda, direita) {

    if (arry.length > 1) {
        let indiceAtual = particiona(arry, esquerda, direita);

        if(esquerda < indiceAtual - 1) {
            quickSort(arry, esquerda, indiceAtual - 1);

        }
        if(indiceAtual < direita) {
            quickSort(arry, indiceAtual, direita);

        }

    }

    return arry;
}

function particiona(array, esquerda, direita) {
    let pivo = array[ Math.floor( (esquerda + direita) / 2 )];
    let atualEsquerda = esquerda;  // 0
    let atualDireita = direita; // 10

    while(atualEsquerda <= atualDireita) {

        // alteração da ESQUERDA para a direita
        while (array[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++;
        }

        // alteração da DIREITA para a esquerda
        while (array[atualDireita].preco > pivo.preco) {
            atualDireita--;
        }

        if (atualEsquerda <= atualDireita) {
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;       
        } 
    }

    return atualEsquerda;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1));