//Capturar evento de submit do formulário
const form = document.querySelector('#formulario')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso) {
        setResultado('Peso inválido', false)
        return
    }
    if (!altura) {
        setResultado('Altura inválida', false)
        return
    }

    const IMC = getIMC(peso, altura)
    const nivelDeObesidade = getNivel(IMC)
    setResultado(`Seu IMC é ${IMC.toFixed(2)} (${nivelDeObesidade})`, true)
})

// Cria parágrafo novo com nome de classe no parâmetro
function criaP(className) {
    const p = document.createElement('p');
    p.classList.add(className)
    return p;
}

//Para printar o resultado num parágrafo novo
function setResultado(msg, isValid) {
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = ''

    let textoResultado
    if (isValid) {
        textoResultado = criaP('paragrafo-resultado')
    }
    if (!isValid) {
        textoResultado = criaP('paragrafo-resultadoErrado')
    }

    resultado.appendChild(textoResultado)
    textoResultado.innerHTML = msg
}

//Para calcular IMC
function getIMC(x, y) {
    return x / (y ** 2)
}

//Para calcular o nível de obesidade
function getNivel(imc) {
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']
    if (imc > 39.9) { return nivel[5] }
    if (imc > 34.9) { return nivel[4] }
    if (imc > 30) { return nivel[3] }
    if (imc > 24.9) { return nivel[2] }
    if (imc > 19.9) {
        return nivel[1]
    } else {
        return nivel[0]
    }
}