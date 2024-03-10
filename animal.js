class  Animal {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    descrever() {
        console.log('O animal se chama', this.nome, " tem",this.idade, " anos")
    }
}

class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade)
        this.cor = cor
    }
    descrever() {
        console.log('O animal se chama', this.nome, " tem",this.idade, " anos", "e tem a cor", this.cor)
    }
    miar() {
        console.log("miau")
    }
}


const gato = new Gato("Sky", 3, "amarela")
const cachorro = new Animal("Totó",5)

gato.descrever()
cachorro.descrever()
gato.miar()


