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
        const senhasValidas = this.senhasSaoValidas()

        if (camposValidos && senhasValidas) {
            alert('Formulário enviado')
            this.formulario.submit()
        }
    }

    senhasSaoValidas() {
        let valid = true

        const senha = this.formulario.querySelector('.senha')
        const senha2 = this.formulario.querySelector('.senha2')

        if (senha.value !== senha2.value){
            valid = false
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais')
            this.criaErro(senha2, 'Campos senha e repetir senha precisam ser iguais')
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            valid = false
            this.criaErro(senha, 'Senha precisa ter de 3 a 12 chars!')
        }

        return valid
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

            if(campo.classList.contains('usuario')) {
                if(!this.validaUser(campo)) valid = false
            }
        }

        return valid
    }

    validaCPF(campo) {
        const cpf = new ValidateCPF(campo.value)
        if (!cpf.validate()) {
            this.criaErro(campo, 'CPF Inválido')
            return false
        }
        return true
    }

    validaUser(campo){
        const user = campo.value
        if (user.length < 3 || user.length > 12 ) {
            this.criaErro(campo, 'Usuário inválido, é necessário ter entre 3 e 12 chars!')
            valid = false
        }
        if (!user.match(/[a-zA-Z0-9]/g)){
            this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números!')
            valid = false
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