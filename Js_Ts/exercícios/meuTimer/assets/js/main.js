//Retornar segundos no formato 00:00:00
function getSeconds(seconds) {
    const data = new Date(seconds * 1000)
    return data.toLocaleTimeString('pt-BR', {
        timeZone: 'UTC'
    })
}

const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

let segundos = 0
let timer

function incrementSeconds() {
    timer = setInterval(function () {
        segundos++
        relogio.innerHTML = getSeconds(segundos)
    }, 1000)
}

iniciar.addEventListener('click', function () {
    relogio.classList.remove('pausado')
    clearInterval(timer)
    incrementSeconds()
});

pausar.addEventListener('click', function () {
    relogio.classList.add('pausado')
    clearInterval(timer)
});

zerar.addEventListener('click', function () {
    relogio.classList.remove('pausado')
    relogio.innerHTML = "00:00:00"
    segundos = 0
});