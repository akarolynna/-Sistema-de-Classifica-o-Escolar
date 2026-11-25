const Aluno = require('../models/Aluno.js');
const prompt = require('prompt-sync')();
const Table = require('cli-table3');
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
            
              throw new Error(`Erro ao cadastrar aluno: ${error.message}`);
              return false;
       }
}

function cadastrarVariosAlunosNaTurmas(turmaSelecionada, turmaService) {
       let qtdAlunos = Number(prompt("Informe quantos alunos tem em sua sala: "));

       if (!Number.isInteger(qtdAlunos) || qtdAlunos <= 0) {
              console.log("Informe um número válido! Maior que zero e positivo!");
              return;
       }

       for (let i = 0; i < qtdAlunos; i++) {
              const cadastrandoAlunos = cadastrarAluno(turmaSelecionada, turmaService);
              if (!cadastrandoAlunos) {
                     i--;
              }
       }
}
function listarAlunosPorTurma(turmaSelecionada) {
       try {
              const alunos = turmaSelecionada.alunosDaSala;
              if (alunos.length === 0) {
                     throw new Error("Nenhum aluno cadastrado nesta turma!");
              }

              const tabela = new Table({
                     head: ['MATRÍCULA', 'NOME', 'NOTA PROVA 1', 'NOTA PROVA 2', 'NOTA TRABALHO'], //DEPOIS MUDAR PARA EXIBIR A MÉDIA E O STATUS DO ALUNO, APROVADO OU REPROVADO HEHEHE, VAI FICAR MAIS BONITO
                     colWidths: [15, 35, 15, 15, 17],
                     wordWrap: true,
                     style: {
                            head: ['magenta'],
                            border: ['magenta']
                     }
              });
              alunos.forEach(aluno => { tabela.push([aluno.matricula, aluno.nome, aluno.notaProva1, aluno.notaProva2, aluno.notaTrabalho]); });
              console.log(tabela.toString());
       } catch (error) {
               console.log(`Erro ao listar alunos: ${error.message}`);

       }
}

module.exports = { pedirDadosAlunos, cadastrarAluno, cadastrarVariosAlunosNaTurmas,listarAlunosPorTurma };


