function area(){
    let altura = Number(prompt("Informe a altura do seu triângulo"))
    let base = Number(prompt("Informe a base o seu triângulo"))
    let resultado = (altura * base) / 2
    alert(`A área do seu triângulo de Base ${base} e altura ${altura} é: ${resultado}`)
}