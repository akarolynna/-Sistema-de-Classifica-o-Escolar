class TurmaService {
    #turmas = [];

    // ... Retorna uma cópia do vet para evitar que o array interno seja alterado por fora
    get turmas() {
        return [...this.#turmas];
    }

    cadastrarTurma(turma) {
        this.#turmas.push(turma);
    }

    cadastrarAluno(turma, novoAluno) {
        turma.cadastrarAluno(novoAluno);
    }

    buscarTurmaPorId(id){
        return this.#turmas.find(turma=> turma.id ===id); //find() procura o primeiro elemento que satisfaça uma condição. BASICAMENTE é:array.find(elemento => condição);
        // então aqui ele busca a turma em que possui o id que o usuario informou
    }

    
}

module.exports = TurmaService;