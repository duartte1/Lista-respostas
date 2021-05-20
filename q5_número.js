const input = require('prompt-sync')()

// Entrada
const num_1 = Number(input('A soma do número com 3 dígitos'))

// Processamento
const centena = num_1 / 100
const resto_1 = num_1 * 100
const dezena = resto_1 / 10
const unidade = resto_1 * 10
const resto_total = centena + dezena + unidade

// Saída
console.log('A soma de seus elementos vale', resto_total)