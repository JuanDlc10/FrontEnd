
const datos = [
    {
        nombre: "jose",
        apellido: "Avila",
        fecha_nacimiento: "10/05/2000",
        puesto: "Sistemas",
        matricula: 1216151
    },
    {
        nombre: "Ana",
        apellido: "Perez",
        fecha_nacimiento: "30/02/2001",
        puesto: "Gestion",
        matricula: 1216132
    },
    {
        nombre: "Julio",
        apellido: "Lopez",
        fecha_nacimiento: "10/05/2000",
        puesto: "Sistemas",
        matricula: 1216123
    }/* ,
    ['carrera', 2010,12,6],
    "Hola mundo" */
]


 const obtener_datos = (dato) => {
    let {nombre, apellido, fecha_nacimiento, puesto ,matricula} = dato;
    console.log(`Los datos son: ${nombre}, ${apellido}, ${fecha_nacimiento}, ${puesto}, ${matricula}`)
}
/*
let [dt1, dt2, dt3, dt4] = datos

obtener_datos(dt1)
obtener_datos(dt2)
obtener_datos(dt3)
let [texto,año, mes, dia] = dt4
console.log(`Los ultimos datos son: ${texto}, ${año}, ${mes}, ${dia}`) */
/*
Forma good
datos.map((persona) => {
    if (typeof persona === 'object' && !Array.isArray(persona)) {
        let {nombre, apellido, fecha_nacimiento, puesto, matricula} = persona;
        console.log(`Los datos son: ${nombre}, ${apellido}, ${fecha_nacimiento}, ${puesto}, ${matricula}`);
    } else if (Array.isArray(persona)) {
        let [texto, año, mes, dia] = persona;
        console.log(`Los ultimos datos son: ${texto}, ${año}, ${mes}, ${dia}`);
    } else {
        console.log(persona)
    }
}); */
datos.map(({nombre, apellido, fecha_nacimiento, puesto ,matricula} = persona) => {
    console.log(`Los datos son: ${nombre}, ${apellido}, ${fecha_nacimiento}, ${puesto}, ${matricula}`)
});

const datos_basicos = (...datos) => {
    let [nombre, apellido, carrera] = datos
    console.log(`Tus datos basicos son: ${nombre}, ${apellido}, ${carrera}`)
}

datos_basicos("Juan", "De la cruz", "Sistemas")



/* generar arreglo dinamico, pedir datos y agregar carrera, edad, escuela, semestre 5 datos. Leer los datos
y agregar datos nuevos*/

