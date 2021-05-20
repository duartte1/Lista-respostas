const input = require('prompt-sync')()

// Entrada
const numero = Number(prompt('O valor do numero: '))

// Processamento
unidade = Number(input(numero / 100))
resto_1 = Number(input(numero % 100))
dezena = Number(input(resto_1 / 10))
centena = Number(input(resto_1 % 10))
numero_1 =  Number(input(centena * 100 + dezena * 10 + unidade * 1))
const soma = Number(input(num_1 + num_2))

// Saída
console.log('A soma de um número com seu inverso é', soma)