let nomeCompleto = prompt("Qual o seu nome completo?")
let dataDeNascimento = prompt("Qual data do seu nascimento?(utilize as '/' )")
const endereço = prompt("Qual o seu endereço?")
let cpf = Number(prompt("Qual o seu CPF?"))
const escolaridade = prompt("Qual o seu nível de escolaridade?")
const filhos = Number(prompt("Quantos filhos possui?"))
const cargo = prompt("Qual o seu cargo atual?")
const salario = Number(prompt("Qual o seu salario?"))
const comissao = confirm("Recebe comissão?")
let anoAdmissao = Number(prompt("Qual o ano de admissão?"))

console.log(typeof nomeCompleto)
console.log(typeof dataDeNascimento)
console.log(typeof endereço)
console.log(typeof cpf)
console.log(typeof escolaridade)
console.log(typeof filhos)
console.log(typeof cargo)
console.log(typeof salario)
console.log(typeof comissao)
console.log(typeof anoAdmissao)

console.log("Relatório:")
console.log("Nome completo:", nomeCompleto)
console.log("Data do seu nascimento:", dataDeNascimento)
console.log("Endereço:", endereço)
console.log("CPF:", cpf)
console.log("Escolaridade:", escolaridade)
console.log("Número de filhos:", filhos)
console.log("Cargo:", cargo)
console.log("Salario:", salario)
console.log("Recebe comissão?:", comissao)
console.log("Ano de admissão:", anoAdmissao)
