const input = require('prompt-sync')()

// Entrada
const meses = Number(input('Valor em meses: '))

// Processamento
const anos = meses / 12
const meses_totais = meses % 12

// Saída
console.log('O valor de meses em anos e de meses totais é', anos, meses_totais)