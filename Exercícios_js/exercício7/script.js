function contarVogais() {
    const palavra = prompt("Digite uma palavra")
    let cont = 0
    palavra = palavra.toLowerCase()
    for (let x = 0; x <= palavra.length; x++) {
        if (palavra.charAt(x) == "a" || palavra.charAt(x) == "e" || palavra.charAt(x) == "i" || palavra.charAt(x) == "o" || palavra.charAt(x) == "u") {
            cont++
        }
    }
    alert(`O número de vogais na palavra ${palavra.toUpperCase()} é: ${cont}`)
}