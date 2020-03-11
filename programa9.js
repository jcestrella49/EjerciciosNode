//Juan Carlos Estrella Rodríguez

function funcRecursiva(entrada) {
    if(entrada == 1) return entrada
    else return (2 + funcRecursiva(entrada - 1))
}

for(var index = 1;index <= 20;index++) console.log(funcRecursiva(index))