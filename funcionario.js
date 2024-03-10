//Defini classe Funcionario
class Funcionario {
    //Construtor a classe Funcionario
    constructor(nome, idade, salarioBase) {
        //Coloquei os atributos da classe Funcionario
        this.nome = nome; // Nome do funcionário
        this.idade = idade; // Idade do funcionário
        this.salarioBase = salarioBase; // Salário do funcionário
    }

    //Aqui coloquei a função do Método para calcular o salário do funcionário
    calcularSalario() {
        //Aqui Retorna o salário base do funcionário
        return this.salarioBase;
    }
}

//Defini a classe Professor, que herda de Funcionario
class Professor extends Funcionario {
    //Construtor da classe Professor
    constructor(nome, idade, salarioBase, disciplina, horasDeAulaPorSemana) {
        //Chamei o construtor da classe pai com os parâmetros dele
        super(nome, idade, salarioBase);
        //Atributos específicos da classe Professor
        this.disciplina = disciplina; // Disciplina lecionada pelo professor
        this.horasDeAulaPorSemana = horasDeAulaPorSemana; // Horas de aula por semana do professor
    }

    //Adicionei aqui o método para calcular o salário do professor
    calcularSalario() {
        const valorHoraAula = 100; // Valor da hora de aula
        // Retorna o salário do professor, que é o resultado do número de horas de aula por semana multiplicado pelo valor da hora de aula
        return this.horasDeAulaPorSemana * valorHoraAula;
    }
}

//Aqui criei objetos Professor
const professor1 = new Professor("Carlos", 42, 5000, "Programação", 25);
const professor2 = new Professor("Pollastreli", 30, 7500, "História", 30);

//E aqui exibi os salários dos professores no console
console.log("Salário de", professor1.nome + ":", professor1.calcularSalario());
console.log("Salário de", professor2.nome + ":", professor2.calcularSalario());
