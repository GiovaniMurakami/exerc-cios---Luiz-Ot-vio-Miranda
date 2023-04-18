function inverter(){
    let resultado
    let numero = prompt("Informe um número")
    for (let x = 0; x<=numero.length; x++){
        resultado = (numero.charAt(x))
        document.write(resultado)
    }
}