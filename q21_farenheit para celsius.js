const input = require('prompt-sync')()

// Entrada
const temperatura = Number(input('Valor da temperatura em farenheit: '))

// Processamento
const farenheit = 76
const valor_celsius = 5 * farenheit - 160 /9

// Saída
console.log('O valor em celsius é', valor_celsius)