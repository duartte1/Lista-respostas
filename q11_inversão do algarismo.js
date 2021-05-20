const input = require('prompt-sync')()

// Entrada
const numero = Number(input('número de 3 algarismos: '))

// Processamento
const centena = numero / 100
const resto = numero % 100
const dezena = resto / 10
const unidade = resto % 10

// Saída
console.log('A inversão dos algarismos é', unidade, dezena, centena)