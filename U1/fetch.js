/* Utilizar fetch ¿que es json.?*/
/* Tarea consumir un api con fetch y desestructurarla */
fetch('local.php')
.then((respuesta) => { 
    return respuesta.json()
})
.then((respuesta) => {
    let [estado, msj] = respuesta
    if (estado == 1) {
        console.log(msj)
    }else {
        console.log("Se produjo un error")
    }
}).catch((error) => {
    console.log(`Se ha producido el siguiente error: ${error}`)
})