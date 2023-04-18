const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btnAddTarefa')
const tarefas = document.querySelector('.tarefas')

btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
})

inputTarefa.addEventListener('keypress', function (evento) {
    if (evento.keyCode === 13) {
        if (!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
    }
})

function criaTarefa(textoInput) {
    const li = criaLi()
    li.innerText = textoInput
    tarefas.appendChild(li)
    limparInput()
    criaBotaoApagar(li)
    salvarTarefas()
}

function criaLi() {
    const li = document.createElement('li')
    return li
}

function limparInput() {
    inputTarefa.value = ''
    inputTarefa.focus()
}

function criaBotaoApagar(li) {
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar)
}

document.addEventListener('click', function (evento) {
    const elemento = evento.target
    if (elemento.classList.contains('apagar')) {
        elemento.parentElement.remove()
        salvarTarefas()
    }
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaTarefas = []

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas')
    const listaTarefas = JSON.parse(tarefas)
    
    for (let tarefa of listaTarefas) {
        criaTarefa(tarefa)
    }
}

adicionaTarefasSalvas()