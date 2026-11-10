
const Turma = require('../models/Turma.js');
const Aluno = require('../models/Aluno.js');

const prompt = require('prompt-sync')();

const TurmaService = require('../services/TurmaService.js');

const { pedirDadosTurma } = require('./ViewTurma.js');
const { pedirDadosAlunos } = require('./ViewAlunos.js');



function iniciar() {

    const turmaService = new TurmaService();

    try {
        const dadosTurma = pedirDadosTurma();
        const turma = new Turma(dadosTurma.nome, dadosTurma.anoLetivo);
        let qtdAlunos = parseInt(prompt("Informe quantos alunos tem em sua sala: "));


        for (let i = 0; i < qtdAlunos; i++) {
            try {
                const dadosAluno = pedirDadosAlunos();
                const novoAluno = new Aluno(dadosAluno.matricula, dadosAluno.nome, dadosAluno.notaProva1, dadosAluno.notaProva2, dadosAluno.notaTrabalho);
                turmaService.cadastrarAluno(turma, novoAluno);
            } catch (error) {
                console.log(`Erro ao cadastrar aluno: ${error.message}`);
                i--;
            }
        }
    } catch (error) {
        console.log(`Erro ao cadastrar turma: ${error.message}`);
    }
}

module.exports = { iniciar };