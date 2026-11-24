class TurmaService {
    #turmas = [];
    cadastrarTurma(turma) {
        this.#turmas.push(turma);
    }

    cadastrarAluno(turma, novoAluno) {
        turma.cadastrarAluno(novoAluno);
    }

    // ... Retorna uma cópia do vet para evitar que o array interno seja alterado por fora
    get turmas() {
        return [...this.#turmas];
    }
}

module.exports = TurmaService;