class SomadorDeNotas {
    constructor(total) {
        this.total = 0
    }
   


adicionarNota(nota) {
    this.total += nota;
}
verOTotal() {
    console.log("O total das notas é:", this.total)
}

}
const Somador = new SomadorDeNotas

Somador.adicionarNota(7)
Somador.adicionarNota(8)
Somador.adicionarNota(9)

Somador.verOTotal()