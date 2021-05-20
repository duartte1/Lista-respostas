const input = require('prompt-sync')()

// Entrada
const salário = Number(input('Salário reais (R$): '))

// Processamento
const aumento = salário * 25/100
const novo_salário = salário + aumento

// Saída
console.log('O seu novo salário é R$', novo_salário)