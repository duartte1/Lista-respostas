const input = require('prompt-sync')()

// Entrada
const valor = Number(input('Valor em reais R$: '))

// Processamento
const novo_valor = valor * 70/100

// Saída
console.log('O seu novo valor é', novo_valor)