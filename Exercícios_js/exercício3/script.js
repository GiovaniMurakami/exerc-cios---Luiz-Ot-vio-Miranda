function converter(){
    let temperatura = Number(prompt("Informe uma temperatura em Fahrenheit"))
    let resultado = (temperatura-32) * (5/9)
    alert(`A conversão de ${temperatura} de Fahrenheit para graus é: ${resultado}`)
}