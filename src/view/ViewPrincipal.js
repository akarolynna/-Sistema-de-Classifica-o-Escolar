const prompt = require('prompt-sync')();
const chalk = require('chalk'); // Isso vai permitir nosso terminal ficar mais bonitinho

const TurmaService = require('../services/TurmaService.js');
const { criarTurma, listarTurmas } = require('./ViewTurma.js');
const { cadastrarVariosAlunosNaTurmas, listarAlunosPorTurma } = require('./ViewAlunos.js');

const turmaService = new TurmaService();

function exibirMenu() {
    console.log(`  ${chalk.magenta.bold("======== SISTEMA DE CLASSIFICAÇÃO ESCOLAR ========")}
    ${chalk.white("1 - Cadastrar turma  ")}                      
    ${chalk.white("2 - Listar turmas  ")}                               
    ${chalk.white("3 - Cadastrar aluno em uma turma")}             
    ${chalk.white("4 - Consultar alunos de uma turma")}           
    ${chalk.white("0 - Sair   ")}                                     
    ${chalk.magenta.bold("================================================")}`);
}



function iniciar() {
    let opcao;
    do {
        process.stdout.write('\x1Bc'); // LIMPA O TERMINAL COMO O CLS
        exibirMenu();
        opcao = parseInt(prompt("Qual a opção desejada:"));

        switch (opcao) {
            case 1: {
                process.stdout.write('\x1Bc');
                console.log(`${chalk.magenta("\n✚ CADASTRAR TURMA")}`);
                const turma = criarTurma(turmaService);
                //  if (turma) { // se deu tudo certo no cadastro da turma
                //   oferecerCadastroAlunos(turma);
                //    }

                break;
            }
            case 2: {
                process.stdout.write('\x1Bc');
                console.log(`${chalk.magenta("\n✚ LISTANDO TURMAS")}`);
                listarTurmas(turmaService);

                break;
            }
            case 3: {
                process.stdout.write('\x1Bc');
                const turmaSelecionada = selecionarTurma()
                if (turmaSelecionada) { // se turmaSelecionada for diferente de nulo
                    cadastrarVariosAlunosNaTurmas(turmaSelecionada, turmaService);
                }

                break;
            }

            case 4: {
                process.stdout.write('\x1Bc');
                const turmaSelecionada = selecionarTurma()
                if (turmaSelecionada) {
                    listarAlunosPorTurma(turmaSelecionada);
                }


                break;
            }
            case 0:
                console.log("Encerrando sistema...");
                break;

            default:
                console.log("Opção inválida!");
                break;
        }

        if (opcao !== 0) {
            prompt(chalk.magenta.bold("\nPressione ENTER para voltar ao menu..."));
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

function selecionarTurma() {
    listarTurmas(turmaService);

    const id = parseInt(prompt("Informe o ID da Turma:"));
    const turma = turmaService.buscarTurmaPorId(id);

    if (!turma) {
        console.log("Turma não encontrada!");
        return null;
    }
    return turma;
}

module.exports = { iniciar };