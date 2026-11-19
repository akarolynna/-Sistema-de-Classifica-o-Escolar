class TurmaService {
    #turmas =[];
    cadastrarTurma(turma){
        this.#turmas.push(turma);
    }

    cadastrarAluno(turma, novoAluno) {
       turma.cadastrarAluno(novoAluno);
    }

}

module.exports = TurmaService;