//defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    this.estoque = estoque

    //Objeto this referencia o próprio objeto do seu escopo, propertyDescriptor é o atributo do objeto
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave
        value: estoque, //Indica o valor
        writable: false, //Pode alterar o valor?
        configurable: false //Pode ser apagada? Reconfigurar?
    })
}

const produto1 = new Produto ('Camiseta', 20, 3)
console.log(produto1)