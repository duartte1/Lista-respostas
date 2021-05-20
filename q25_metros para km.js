const input = require('prompt-sync')()

// Entrada
const metros = Number(input('Número em metros: '))

// Processamento
const km = metros / 1000
const metros_totais = metro % 1000

// Saída
console.log('Quantidade calculada para quilometro e metro', km, metros_totais)