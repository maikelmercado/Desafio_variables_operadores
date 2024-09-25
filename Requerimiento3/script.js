// 0 Grados Celsius corresponden a 273,15 Kelvin. La fórmula para convertirlos
// es 0 °C + 273.15 = 273.15 K
// 0 Grados Celsius corresponden a 32 Fahrenheit. La fórmula para convertirlos 
// es (0 °C × 9/5) + 32 = 32 °F

let celsius = parseFloat(prompt("Ingrese la temperatura en grados celsuius"));
let kelvin = celsius + 273.15;
let Fahrenheit = (celsius * 9/5)+32;

alert(`kelvin ${kelvin}, Fahrenheit${Fahrenheit}, celsius${celsius}`);