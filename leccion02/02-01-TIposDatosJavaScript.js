/*
    Ejemplos de tipo de datos en JavaScript

*/

//tipo de datos string
var nombre = "Juan";
console.log(nombre);

nombre=10;

console.log(nombre);

//para saber q tipo de variable usamos 'typeof'
console.log(typeof nombre);

//tipo número
var numero = 1000;
console.log(numero);

//tipo object
var objeto = {
    nombre: "Juan",
    apellido: "Vilchez",
    telefono: 994917864
};

console.log(objeto);

//tipo booleano {true, false}
var bandera = true;

console.log(bandera);
console.log(typeof bandera);

bandera = false;
console.log(bandera);
console.log(typeof bandera);

//tipo función
function miFuncion(){
}

console.log(miFuncion);
console.log(typeof miFuncion);

//tipo symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

//tipo clase, es una función
class Persona{
    constructor(nombre, apellido){
        //inicializamos las variables
        this.nombre = nombre,
        this.apellido = apellido
    }
}

console.log(Persona);
console.log(typeof Persona);

//tipo undefined
var x;
console.log(x);
console.log(typeof x);

//tipo null = ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);