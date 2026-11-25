
const Turma = require('../models/Turma.js');
const prompt = require('prompt-sync')();
const chalk = require('chalk');
const Table = require('cli-table3');

function pedirDadosTurma() {

    let resposta = prompt("Digite os dados da turma ( Nome | Ano Letivo): ").split('|');
    if (resposta.length !== 2) {
        throw new Error("Erro! Informe exatamente os dois campos solicitados.\n");
    }

    let turmaNome = resposta[0];
    let turmaAnoLetivo = Number(resposta[1]);

    return {
        nome: turmaNome,
        anoLetivo: turmaAnoLetivo
    };
}

function criarTurma(turmaService) {
    // console.log("Iniciando cadastro...");
    while (true) {
        try {
            const dadosTurma = pedirDadosTurma();
            const novaTurma = new Turma(dadosTurma.nome, dadosTurma.anoLetivo);
            turmaService.cadastrarTurma(novaTurma);
            // console.log(chalk.bgGreen("Turma cadastrada com sucesso!\n")); //melhorar futuramente para ago mais robusto
            console.log(chalk.green('│ ✓ Turma cadastrada com sucesso! \n'));
            return novaTurma;
        } catch (error) {
            console.log(`${chalk.bgRed(error.message)}`);

        }
    }
}

function listarTurmas(turmaService) {
    try {
        const turmas = turmaService.turmas; // sem (), pq turmas aqui não é um método quaquer, mas sim nosso get

        if (turmas.lenght === 0) {
            throw new Error("Nenhuma turma cadastrada!");
        }


        const tabela = new Table({
            head: ['ID', 'Nome da Turma', 'Ano Letivo'],
            colWidths: [8, 35, 15],
            wordWrap: true,
            style: {
                head: ['magenta'],
                border: ['magenta']
            }
        });

        turmas.forEach(turma => { tabela.push([turma.id, turma.nome, turma.anoLetivo]); });
        console.log(tabela.toString());

    } catch (error) {
        console.log(`Erro ao listar turmas: ${error.message}`);
    }
}

module.exports = { pedirDadosTurma, criarTurma, listarTurmas };

