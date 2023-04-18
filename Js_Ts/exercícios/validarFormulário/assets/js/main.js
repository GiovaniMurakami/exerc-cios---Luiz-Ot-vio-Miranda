class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }
    eventos() {
        this.formulario.addEventListener('submit', event => {
            this.handleSubmit(event)
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        const camposValidos = this.camposSaoValidos()
    }
    camposSaoValidos() {
        let valid = true
        
        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove()
        }

        for (let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerHTML.replace(':', '')
            if(!campo.value) {
                this.criaErro(campo, `Campo ${label} não pode ser vazio`)
                valid = false
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false
            }
        }
    }

    validaCPF(campo) {
        const cpf = new ValidateCPF(campo.value)
        if (!cpf.validate()) {
            this.criaErro(campo, 'CPF Inválido')
            return false
        }
        return true
    }

    criaErro(campo, msg){
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaFormulario()