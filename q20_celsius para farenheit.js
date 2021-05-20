const input = require('prompt-sync')()

// Entrada
const temperatura = Number(input('Valor temperatura em celsius: '))

// Processamento
const celsius = 23
const valor_farenheit = 9 * celsius + 160 / 5

// Saída
console.log('O valor da temperatura em farenheit é', valor_farenheit)