const input = require('prompt-sync')()

// Entrada
const horas = Number(input('Valor em horas: '))

// Processameto
const semana = hora / 168
const resto = hora % 168
const dia = resto / 24
const horas_1 = resto % 24

// Saída
console.log('A transformação de horas para semana e dia é', semana, dia)