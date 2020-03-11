//Juan Carlos Estrella Rodríguez

function defMapaDatos(){
    mapaDatos = new Map()
    mapaDatos.set(1,"Lol")
    mapaDatos.set(2,"Fortnite")
    mapaDatos.set(3,"Smash Bros")
    mapaDatos.set(4,"Gears Of War")
    mapaDatos.set(5,"God Of War")
    mapaDatos.set(6,"Free Fire")
    mapaDatos.set(7,"Halo")
    mapaDatos.set(8,"TFT")
    return mapaDatos
}
tablaLaLiga = defMapaDatos()
claveBuscada = 5
console.log("El valor asociado a la clave "+claveBuscada+" es: "+tablaLaLiga.get(claveBuscada))

