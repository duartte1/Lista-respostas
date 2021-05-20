const input = require('prompt-sync')()

// Entrada
const massa_kg = Numner(input('Valor da massa (kg): '))

// Processamento
const massa_g = massa_kg * 1000

// Saída
console.log('O valor da massa em gramas é', massa_g)