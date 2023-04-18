function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function () {
            return cpfEnviado.replace(/\D+/g, '')
        }
    })
}

const cpf = new ValidaCPF('999.999.999-99')
if (cpf.valida()) {
    console.log('CPF VÁLIDO')
} else {
    console.log('CPF INVÁLIDO')
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false
    if (this.cpfLimpo.length !== 11) return false
    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)
    const novoCPF = cpfParcial + digito1 + digito2
    return novoCPF === this.cpfLimpo
}


ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial)
    let regressivo = cpfArray.length + 1
    let total = cpfArray.reduce((acumulador, valor) => {
        acumulador += regressivo * Number(valor)
        regressivo--
        return acumulador
    }, 0)

    const digito = 11 - (total % 11)
    return digito > 9 ? String(0) : String(digito)
}
