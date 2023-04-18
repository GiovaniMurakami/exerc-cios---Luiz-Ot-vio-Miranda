function areaCirculo(){
    let raio = Number(prompt("Informe o raio de um círculo"))
    let resultado = (raio**2)* Math.PI
    alert(`A área do círculo com raio ${raio} é: ${resultado.toFixed(2)}`) //Método to fixed para arredondar números sem alterar o seu valor
}