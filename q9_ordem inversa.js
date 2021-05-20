const input = require('prompt-sync')()

// Entrada
a = Number(prompt('Valor do primeiro número: '))
b = Number(prompt('Valor do segundo número: '))

// Processamento
inverso = b + "" + a

// Saída
console.log('A ordem inversa dos algarismos digitados é: ', inverso)