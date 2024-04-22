const array = [
    { valor: 2 },
    { valor: 4 },
    { valor: 7 },
];

function divideValor(lista) {
    return lista.map(objeto => ({ valor: objeto.valor / 2 }));
}

console.log(divideValor(array));
