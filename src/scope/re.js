var firstName; // Undefined

firstName = 'Oscar';

console.log(firstName);

var lastName = "David"; // declarando / asignar
lastName = 'Ana'; //reasignando   
console.log(lastName);

var secondName='David'; // declarando / asignando
var secondName ='Ana'; // reasignando
console.log(secondName);


// let -- no permite re-declarar block-scope
let fruit ='Apple'; //Declarar y Asignar
fruit = 'Kiwi'; //Reasignar
console.log(fruit);

// const no puede ser reasignada ni re-declarada
const animal ='dog'; //declara y asigna
animal='gato'; // reasignando
console.log(animal);

const vehicles =[];
vehicles.push("carro"); //agregar
console.log(vehicles);

vehicles.pop(); //elimina el ultimo elemento
console.log(vehicles);