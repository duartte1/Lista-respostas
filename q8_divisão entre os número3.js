const input = require('prompt-sync')()

// Entrada
const numero_1 = Number(input('Valor do primeiro número: '))
const numero_2 = Number(input('Valor do segundo número: '))

// Processamento
const soma = numero_1 + numero_2
const diferenca = numero_1 - numero_1
const divisao = soma / diferenca

// Saída
console.log('A divisão entre os números dados é', divisao)