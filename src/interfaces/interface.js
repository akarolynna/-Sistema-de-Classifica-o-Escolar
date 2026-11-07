
const Aluno = require('../models/Aluno.js');
const AlunoService = require('../services/AlunoService.js');
const prompt = require('prompt-sync')();

function iniciar() {

    const alunoService = new AlunoService();
    let qtdAlunos = prompt("Informe quantos alunos tem em sua sala: ");


    for (let i = 0; i < qtdAlunos; i++) {
        let resposta = prompt("Digite os dados do aluno (Matricula | Nome | P1 | P2 | Trabalho): ").split('|');
        let alunoMatricula = resposta[0];
        let alunoNome = resposta[1];
        let alunoP1 = parseFloat(resposta[2]);
        let alunoP2 = parseFloat(resposta[3]);
        let alunonotaTrabalho = parseFloat(resposta[4]);

        const novoAluno = new Aluno(alunoMatricula, alunoNome, alunoP1, alunoP2, alunonotaTrabalho);
        alunoService.cadastrarAluno(novoAluno);

    }
}
module.exports = { iniciar };