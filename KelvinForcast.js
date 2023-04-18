//constant variable kelvin
const kelvin = 293;
//converting to celsius
const celsius = kelvin - 273;
//calculate Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
//This rounds the value down to whole number
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//converting to Newton
let newton = celsius * (33 / 100);
//This rounds the value down to a whole number
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees in Newton.`);