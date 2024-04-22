const number=[2,3,4,7,8,20]

function recebeLista(lista){
    return lista.map((valor => valor=valor*3))


}

console.log(recebeLista(number));

const lista=[2,3,6,7,9]

function listadeNumeros(lista){
  return  lista.reduce((cc,valorAtual)=> {
       return cc+valorAtual;

},0)
}

console.log(listadeNumeros(lista))