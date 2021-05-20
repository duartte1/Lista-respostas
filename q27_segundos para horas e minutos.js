const input = require('prompt-sync')()

// Entrada
const segundos = Number(input('Número de segundos: '))

// Processamento
const horas = segundos / 3600
const resto = segundos % 3600
const minutos = resto / 60
const segundos_1 = resto % 60

// Entrada
console.log('A transformação de segundos para horas e minutos e', horas, minutos)