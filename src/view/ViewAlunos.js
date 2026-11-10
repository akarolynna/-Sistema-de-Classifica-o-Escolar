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
module.exports = { pedirDadosAlunos };


