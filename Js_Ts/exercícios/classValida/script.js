class ValidateCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfCl', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    sequence() {
        return this.cpfCl.charAt(0).repeat(this.cpfCl.length) === this.cpfCl
    }

    digit(cpf) {
        const cpfArray = Array.from(cpf)
        let regressive = cpf.length + 1
        let total = cpfArray.reduce((ac, val) => {
            ac += regressive * (Number(val))
            regressive--
            return ac
        }, 0)
        const digito = 11 - (total % 11)
        return digito > 9 ? '0' : String(digito)
    }

    segundoCPF(cpfCl) {
        const cpfParcial = cpfCl.slice(0, -2)
        const digito1 = this.digit(cpfParcial)
        const digito2 = this.digit(cpfParcial + digito1)
        const result = cpfParcial + digito1 + digito2
        return result
    }

    validate() {
        if (!this.cpfCl) return false
        if (typeof this.cpfCl !== 'string') return false
        if (this.cpfCl.length !== 11) return false
        if (this.sequence()) return false
        const result = this.segundoCPF(this.cpfCl)
        return result === this.cpfCl
    }
}

const cpf1 = new ValidateCPF('476.716.578-40');
if (cpf1.validate()) {
    console.log('CPF Válido')
} else {
    console.log('CPF Inválido')
}
