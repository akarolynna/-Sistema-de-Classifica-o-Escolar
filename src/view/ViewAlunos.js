const Aluno = require('../models/Aluno.js');
const prompt = require('prompt-sync')();

function pedirDadosAlunos() {
       let resposta = prompt("Digite os dados do aluno (Matricula | Nome | P1 | P2 | Trabalho): ").split('|');
       let alunoMatricula = resposta[0];
       let alunoNome = resposta[1];
       let alunoP1 = parseFloat(resposta[2]);
       let alunoP2 = parseFloat(resposta[3]);
       let alunoNotaTrabalho = parseFloat(resposta[4]);

       return {
              matricula: alunoMatricula,
              nome: alunoNome,
              notaProva1: alunoP1,
              notaProva2: alunoP2,
              notaTrabalho: alunoNotaTrabalho
       };
}
function cadastrarAluno(turma, turmaService) {
       // console.log("Iniciando cadastro...");
       try {
              const dadosAluno = pedirDadosAlunos();
              const novoAluno = new Aluno(dadosAluno.matricula, dadosAluno.nome, dadosAluno.notaProva1, dadosAluno.notaProva2, dadosAluno.notaTrabalho);
              turmaService.cadastrarAluno(turma, novoAluno);
              return true;
       } catch (error) {
              console.log(`Erro ao cadastrar aluno: ${error.message}`);
              return false;
       }
}

function cadastrarVariosAlunosNaTurmas(turma, turmaService) {
       let qtdAlunos = Number(prompt("Informe quantos alunos tem em sua sala: "));

       if (!Number.isInteger(qtdAlunos) || qtdAlunos <= 0) {
              console.log("Informe um número válido! Maior que zero e positivo!");
              return;
       }

       for (let i = 0; i < qtdAlunos; i++) {
              const cadastrandoAlunos = cadastrarAluno(turma, turmaService);
              if (!cadastrandoAlunos) {
                     i--;
              }
       }
}

module.exports = { pedirDadosAlunos, cadastrarAluno, cadastrarVariosAlunosNaTurmas };


