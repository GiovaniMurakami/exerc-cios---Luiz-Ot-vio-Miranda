// FILTER -> Sempre retorna um array com a mesma quantidade de elementos ou menos

const numeros = [5, 50, 80, 1, 2, 3, 4 , 8, 7, 11, 15, 22, 27]

const numerosFiltrados = numeros.filter(function(valor, indice, array){
    return valor > 10
})
//console.log(numerosFiltrados)

const pessoas = [
    { nome: 'Giovani', idade: 22},
    { nome: 'Marcos', idade: 32},
    { nome: 'Kléber', idade: 18},
    { nome: 'Pedro', idade: 62},
    { nome: 'Maria', idade: 35},
    { nome: 'Ana', idade: 40},
]

const pessoaNomeGrande = pessoas.filter(objeto => objeto.nome.length > 5)

const pessoaIdadeAvancada = pessoas.filter(objeto => objeto.idade > 50)

const pessoaNomeTerminaComA = pessoas.filter(function(objeto) {
    return objeto.nome.toLowerCase().endsWith('a')
})

//console.log(pessoaNomeGrande)
//console.log(pessoaIdadeAvancada)
//console.log(pessoaNomeTerminaComA)

//MAP -> Sempre retorna a mesma quantidade de elementos que o array de referência, altera os valores do array

const nums = [5, 50, 80, 1, 2, 3, 4 , 8, 7, 11, 15, 22, 27]

const numsDobrados = nums.map(function(valor){
    return valor * 2
})

//console.log(numsDobrados)

const pessoas2 = [
    { nome: 'Giovani', idade: 22},
    { nome: 'Marcos', idade: 32},
    { nome: 'Kléber', idade: 18},
    { nome: 'Pedro', idade: 62},
    { nome: 'Maria', idade: 35},
    { nome: 'Ana', idade: 40},
]

const apenasNomes = pessoas2.map(objeto => objeto.nome)

//console.log(apenasNomes)

//REDUCE -> Reduz o array a apenas um elemento

const nums2 = [5, 50, 80, 1, 2, 3, 4 , 8, 7, 11, 15, 22, 27]

const total = nums2.reduce(function(acumulador, valor, indice, array){
    if (valor % 2 !== 0) acumulador.push(valor)
    return acumulador
}, [])

console.log(total)