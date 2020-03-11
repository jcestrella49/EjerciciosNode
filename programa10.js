//Juan Carlos Estrella Rodríguez

var listaRecibida = [2,4,8,2,4,5,10,20,30]
var listaDatosPares = []
var iterador = 0

function determinarPares(entrada) {
    if (entrada == 0) return true
    else return determinarImpares(entrada - 1)
}

function determinarImpares(entrada) {
    if (entrada == 0) return false
    else return determinarPares(entrada - 1)
}

for(var index = 0;index < listaRecibida.length;index++) {
    if(determinarPares(listaRecibida[index])==true) listaDatosPares[index] = listaRecibida[index]
}

do {
    if(listaDatosPares[iterador] == undefined) listaDatosPares.splice(iterador,1)
    console.log(listaDatosPares[iterador])
    iterador++
} while(iterador<listaDatosPares.length)