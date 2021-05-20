const input = require('prompt-sync')()

// Entrada
const dia = Number(input('Número de dias: '))

// Processamento
const semana = dia / 7
const dia_total = dia % 7

// Saída
console.log('Conversão de dia em semana é', semana, dia_total)