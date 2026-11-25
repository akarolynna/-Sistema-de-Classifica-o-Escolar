const { setTimeout } = require('node:timers/promises');
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



async function iniciar() {
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
                await setTimeout(2000);
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
                await setTimeout(1000);
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
                console.log(`${chalk.magenta("\nEncerrando sistema...")}`);
                await setTimeout(1000);
                break;

            default:
                console.log(`${chalk.bgYellow.black("Opção inválida!")}`);
                await setTimeout(1000);
                break;
        }

        if (opcao == 2 || opcao == 4) {
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
    console.log(`${chalk.yellow("Caso deseje sair aperte ENTER ou digite 0!\n")}`);
    while (true) {
        try {

            const resposta = prompt("Informe o ID da Turma:").trim();
            if (resposta === "0" || resposta === "") {
                return false;
            }

            const id = parseInt(resposta);
            const turma = turmaService.buscarTurmaPorId(id);

            if (!turma) {
                throw new Error(`${chalk.bgYellow.black("Turma não encontrada!\n")}`);
            }
            return turma;
        } catch (error) {
            console.log(error.message);
        }
    }
}


module.exports = { iniciar };