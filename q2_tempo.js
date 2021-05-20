const input = require('prompt-sync')()

// Entrada
const tempo_horas = Number(input('Tempo (horas): '))

// Processamento
const tempo_minutos = tempo_horas / 60

// Saída
console.log('O tempo', tempo_horas, 'horas')
console.log('é igual a', tempo_minutos, 'minutos')