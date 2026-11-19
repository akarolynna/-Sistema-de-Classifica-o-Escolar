const prompt = require('prompt-sync')();

const TurmaService = require('../services/TurmaService.js');

const { criarTurma } = require('./ViewTurma.js');
const { cadastrarVariosAlunosNaTurmas } = require('./ViewAlunos.js');

const turmaService = new TurmaService();

function exibirMenu() {
    console.log(`
    ===== SISTEMA DE CLASSIFICAÇÃO ESCOLAR =====

    1 - Cadastrar turma
    2 - Listar turmas
    3 - Cadastrar aluno em uma turma
    4 - Consultar alunos de uma turma
    0 - Sair
    `);
}

function iniciar() {
    let opcao;
    do {
        exibirMenu();
        opcao = parseInt(prompt("Qual a opção desejada: "));
        switch (opcao) {
            case 1:
                console.log("\nIniciando cadastro...");
                const turma = criarTurma(turmaService);

                if (turma) { // se deu tudo certo no cadastro da turma
                    oferecerCadastroAlunos(turma);
                }
                break;

            case 2:
                break;

            case 3:

                break;

            case 4:
                break;

            case 0:
                console.log("Encerrando sistema...");
                break;

            default:
                console.log("Opção inválida!");
                break;
        }
    } while (opcao !== 0);
}

function oferecerCadastroAlunos(turma) {
    let resposta = prompt("Deseja cadastrar alunos nesta turma(Sim ou Não): ").trim().toUpperCase();

    if (resposta == "SIM") {
        console.log("\nIniciando cadastro...");
        cadastrarVariosAlunosNaTurmas(turma, turmaService);
    }
}


module.exports = { iniciar };