function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia(){
            this.cliqueBotoes()
            this.pressionaEnter()
        },

        btnParaDisplay(valor){
            this.display.value += valor
            this.display.focus()
        },

        clearDisplay() {
            this.display.value = ''
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1)
        },

        pressionaEnter() {
            document.addEventListener('keypress', e => {
                if (e.keyCode === 13) {
                    this.realizaConta()  
                }
                if (e.keyCode === 8) {   
                    this.apagaUm()
                }
            })
        },

        realizaConta() {
            let conta = this.display.value
            try {
                conta = eval(conta)
                if (!conta) {
                    alert('Conta Inválida')
                    this.display.value = ''
                }
                this.display.value = conta
            } catch (e) {
                this.display.value = ''
                alert('Conta Inválida') 
            }
        },

        cliqueBotoes(){
            document.addEventListener('click', e => {
                const el = e.target

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }
                
                if (el.classList.contains('btn-del')) {
                    this.apagaUm()
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta()
                }
            })
        },
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()