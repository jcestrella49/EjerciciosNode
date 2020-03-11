//Juan Carlos Estrella Rodríguez

var n = 5
var rangoLi = 1
var rangoLs = 10
for (let index = rangoLi; index <= rangoLs; index++) {
    if(n==index){
        console.log("El numero "+n+" esta dentro del rango")
        break;
    }
    if(n!=index && index==rangoLs) console.log("El número "+n+" no esta dentro del rango")
}