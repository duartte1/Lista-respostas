const input = require('prompt-sync')()

// Entrada
const anos = Number(input('Valor em anos: '))

// Processamento
const dias = anos * 365
const meses = dias * 30
const idade = Number(input(dias + meses + idade))

// Saída
console.log('O valor da idade em dias e meses é', dias, meses, idade)