const input = require('prompt-sync')()

// Entrada
const minutos = Number(input('Valor em minutos: '))

// Processamento
const dias = minutos / 1440
const resto = minutos % 1440
const horas = resto / 60
const minutos_totais = resto % 60

// Saída
console.log('O valor de minutos totais e de dias e de horas é', minutos_totais, dias, horas )