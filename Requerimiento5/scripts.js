//Crear un programa que solicite al usuario 5 números y realice los cálculos que se piden
//a continuación. (2 Puntos)
//● La suma de todos los números.
//● El promedio de los 5 números ingresados

let num1 = parseInt(prompt("Ingrese el Primer Numero:"));
let num2 = parseInt(prompt("Ingrese el Segundo Numero:"));
let num3 = parseInt(prompt("Ingrese el Tercero Numero:"));
let num4 = parseInt(prompt("Ingrese el Cuarto Numero:"));
let num5 = parseInt(prompt("Ingrese el Quinto Numero:"));

let ResultadoSuma = num1 + num2 + num3 + num4 + num5 ;
let ResultadoPromedio = ResultadoSuma /5;

alert (`El resultado de la suma de los 5 numeros es: ${ResultadoSuma} y el promedio es ${ResultadoPromedio} `);
