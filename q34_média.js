const input = require('prompt-sync')()

// Entrada
const numero_1 = Number(input('Valor do primeiro numero: '))
numero_2 = Number(input('Valor do segundo numero: '))
numero_3 = Number(input('Valor do terceiro numero: '))

// Processamento
const media = Number(input(numero_1 + numero_2 + numero_3) / 3)

// Saída
console.log('A média é', media)