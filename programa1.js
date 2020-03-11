//Juan Carlos Estrella Rodríguez

var num = 4
var potencia = 2

const elevarPotencia = function(x,n){
    var resultado = 1
    for(var count = 0;count<n;count++){
        resultado *= x
    }
    return resultado
}
console.log(elevarPotencia(num,potencia))