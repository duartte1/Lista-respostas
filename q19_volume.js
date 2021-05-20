const input = require('prompt-sync')()

// Entrada
const raio = Number(input('Valor do raio: '))

// Processamento
const raio = 25
const volume = 4 * 3.14 * raio / 3

// Saída
console.log('O valor do volume é', volume)