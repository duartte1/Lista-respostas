const input = require('prompt-sync')()

// Entrada
const dias = Number(input('Valor em dias: '))

// Processamento
const ano = dias / 365
const resto = dias % 365
const meses = resto / 12
const dia_total = resto % 12

// Saída
console.log('O valor de dias em ano e meses é', ano, meses, dia_total)