
const datos = [
    {
        nombre: "jose",
        apellido: "Avila",
        fecha_nacimiento: "10/05/2000",
        puesto: "Sistemas",
        matricula: 1216151,
        carrera: "Sistemas",
        escuela: "Itma",
        semestre: "primero"
    },
    {
        nombre: "Ana",
        apellido: "Perez",
        fecha_nacimiento: "30/02/2001",
        puesto: "Gestion",
        matricula: 1216132,
        carrera: "Sistemas" ,
        escuela: "itma2",
        semestre: "segundo" 
    },
    {
        nombre: "Julio",
        apellido: "Lopez",
        fecha_nacimiento: "10/05/2000",
        puesto: "Sistemas",
        matricula: 1216123,
        carrera: "sistemas" ,
        escuela: "itma",
        semestre: "tercero"
    },
    {
        nombre: "Alejandro",
        apellido: "Mendoza",
        fecha_nacimiento: "11/02/2002",
        puesto: "Sistemas",
        matricula: 1216119,
        carrera: "sistemas",
        escuela: "itma2",
        semestre: "cuarto"
    },
    {
        nombre: "Salvador",
        apellido: "Mendiola",
        fecha_nacimiento: "13/10/2005",
        puesto: "Sistemas",
        matricula: 1216110,
        carrera: "sistemas",
        escuela: "itma2",
        semestre: "octavo" 
    }
]


datos.map(( {nombre, apellido, fecha_nacimiento, puesto ,matricula, carrera, escuela, semestre}= persona) => {
    console.log(`Los datos son: ${nombre}, ${apellido}, ${fecha_nacimiento}, ${puesto}, ${matricula}, ${carrera}, ${escuela}, ${semestre}`)
});

const nuevosUsuarios = [
    {
        nombre: "María",
        apellido: "García",
        fecha_nacimiento: "15/08/1999",
        puesto: "Desarrollo",
        matricula: 1216166,
        carrera: "Sistemas",
        escuela: "Itma",
        semestre: "quinto"
    },
    {
        nombre: "Carlos",
        apellido: "Rodríguez",
        fecha_nacimiento: "20/03/2003",
        puesto: "Soporte",
        matricula: 1216177,
        carrera: "Sistemas",
        escuela: "itma2",
        semestre: "sexto"
    }
];

datos.push(...nuevosUsuarios);

datos.map(({ nombre, apellido, fecha_nacimiento, puesto, matricula, carrera, escuela, semestre }) => {
    console.log(`Los datos son: ${nombre}, ${apellido}, ${fecha_nacimiento}, ${puesto}, ${matricula}, ${carrera}, ${escuela}, ${semestre}`);
});
