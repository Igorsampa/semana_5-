    class Funcionario {
        constructor(nome, idade, salarioBase) {
            this.nome = nome
            this.idade = idade
            this.salarioBase = salarioBase
        }
        calcularSalario()  {
            return this.salarioBase
        }
    }
        class Professor extends Funcionario {
            constructor(nome, idade, salarioBase, disciplina, horasDeAulaPorSemana) {
                super (nome, idade, salarioBase)
                this.disciplina = disciplina
                this.horasDeAulaPorSemana = horasDeAulaPorSemana
            }
            calcularSalario() {
                const valorHoraAula = 100
                return this.horasDeAulaPorSemana * valorHoraAula
            }
        }
            const professor1 = new Professor ("Carlos", 42, 5000, "Programação", 25)
            const professor2 = new Professor ("Pollastreli", 30, 7500, "História", 30)

            console.log("Salário de", professor1.nome + ":", professor1.calcularSalario());
    console.log("Salário de", professor2.nome + ":", professor2.calcularSalario());