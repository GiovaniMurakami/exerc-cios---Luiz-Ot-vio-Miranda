class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já ligado`)
            return
        }
        this.ligado = true
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já desligado`)
            return
        }
        this.ligado = false
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, preco) {
        super(nome)
        this.cor = cor
        this.preco = `R$ ${preco}`
    }
}

const s1 = new Smartphone('iPhone', 'Prata', 4500)
console.log(s1)