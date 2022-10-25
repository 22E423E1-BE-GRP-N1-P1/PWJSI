/* numA = +prompt("Num A");
numB = +prompt("Num B");
alert("Escolha uma operação!");
// se (numB tem algo){ alert()}
// senão {} */

// Atividade 1: Converter de °C para °F
/* const tempCelsiusStr = prompt("Informe a temperatura:");
const tempCelsius = +tempCelsiusStr;
let tempFahrenheit = 0;
tempFahrenheit = tempCelsius * 9 / 5 + 32
// formula f =  c * 9 / 5 + 32
// 0 - 32 / 100 - 212
console.log("Temperatura em Fahrenheit: ", tempFahrenheit); */

/* const tempCelsius = +prompt("Informe a temperatura:");
console.log("Temperatura em Fahrenheit: ", tempCelsius * 9 / 5 + 32); */

// Atividade 2: Converter de °F para °C
// 32°f - 0°c / 212°f - 100°c
// formula c =  f - 32 x 5 / 9
/* const tempFahrenheit = prompt("Informe a temperatura:");
// const tempFahrenheit = +tempFahrenheitStr;
let tempCelsius = 0;
tempCelsius = (tempFahrenheit - 32) * 5 / 9;
console.log("Temperatura em Celsius: ", tempCelsius); */

/* console.log("212" - 32);
console.log("212" * 32);
console.log("212" / 32);
console.log("212" % 32);
console.log("212" ** 32); */

/* Atividade 3: Um motorista deseja abastecer um valor X em reais, de combustível. Escreva um algoritmo para ler o preço do litro do combustível e o valor que o motorista deseja abastecer. Em seguida, informe quantos litros foram abastecidos. */

/* const valorDisponivel = prompt("Valor disponível (R$): ");
const valorPorLitro = prompt("Valor do litro (R$/l): "); */
/* let quantLitros = 0;
quantLitros = valorDisponivel / valorPorLitro; */
/* let quantLitros;
quantLitros = valorDisponivel / valorPorLitro; */
/* const quantLitros = valorDisponivel / valorPorLitro;
console.log("Quantidade comprada (l)", quantLitros); */

/* const nome = "Nikola Tesla";
const pais = 'Inglaterra';
const idade = `90`;

const mensagem = `Ola, ${nome}. Você é do país ${pais} e está com ${idade} anos.`;
// const mensagem = `Ola, `+nome+`. Você é do país `+pais+` e está com `+idade+` anos.`;

console.log(mensagem);

console.log("Quantidade comprada (l): ", quantLitros); 
console.log("Quantidade", quantLitros, "comprada (l): "); 
console.log(`Quantidade comprada (l): ${quantLitros}`);  */

/* Atividade 4: Crie um algoritmo que calcule o valor gasto em uma corrida considerando o consumo do veículo, o valor do combustível e a distância percorrida.
Use apenas constantes. */

const consumo = prompt("Km por litro (km/l)");
const valorLitro = prompt("Valor por litro (R$).");
const distancia = prompt("Distância percorrida (km).");

// quant de litros gastos
const consumoDaViagem = distancia / consumo; 
const valorViagem = consumoDaViagem * valorLitro;
  
console.log(`Valor da Viagem:\tR$ ${valorViagem}`);