const input = require('prompt-sync')()

// Entrada
const valor_m = Number(input('Valor em metros (m): '))

// Processamento
const valor_cm = valor_m * 100

// Saída
console.log('O valor em cm é', valor_cm)