class AlunoService {
    alunosDaSala = [];

    cadastrarAluno(novoAluno) {
        this.alunosDaSala.push(novoAluno);
    }

}

module.exports = AlunoService;