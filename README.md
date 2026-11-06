# 📊 Sistema de Classificação Escolar

<div align="center">

**Uma aplicação em JavaScript para processamento de dados acadêmicos e classificação do desempenho escolar.**

<img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-20A44A?style=for-the-badge" alt="Em desenvolvimento">
<img src="https://img.shields.io/badge/JavaScript-20A44A?style=for-the-badge&logo=javascript&logoColor=white" alt="JavaScript">
<img src="https://img.shields.io/badge/Node.js-20A44A?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">

</div>

---

## 🎯 Sobre o Projeto

O **Sistema de Classificação Escolar** é uma aplicação executada via terminal, desenvolvida em JavaScript com Node.js, que automatiza o processamento e a análise do desempenho acadêmico de estudantes.

A aplicação permite cadastrar alunos, informar suas notas e calcular automaticamente suas médias ponderadas. A partir dos resultados, identificar qual sua situação acadêmica.

O projeto utiliza Programação Orientada a Objetos (POO) para organizar os dados e encapsular as regras de negócio, tornando o processamento mais estruturado e facilitando futuras implementações.

## ⚙️ Funcionalidades

- Cadastro de estudantes por meio de uma única entrada de dados.
- Separação e tratamento das informações utilizando o delimitador `|`.
- Cálculo automatizado de médias ponderadas.
- Identificação de aprovação direta.
- Cálculo da nota necessária para aprovação na Prova Final (VS).
- Identificação de reprovação quando a nota necessária ultrapassa o limite permitido.
- Armazenamento dos estudantes em um vetor durante a execução.
- Exibição  dos resultados acadêmicos.

## 🧮 Regras de Classificação

A média ponderada considera três avaliações:

| Avaliação | Peso |
|---|---:|
| Prova 1 | 2,5 |
| Prova 2 | 2,5 |
| Trabalho | 1,0 |

A classificação segue os seguintes critérios:

- **Aprovado(a) diretamente:** média igual ou superior a 6,0.
- **Em recuperação (VS):** média inferior a 6,0, mas com possibilidade de alcançar a média final necessária.
- **Reprovado(a) diretamente:** quando a nota exigida na VS ultrapassa 10,0.

## 🛠️ Tecnologias e Conceitos

<div align="center">
  <img src="https://skillicons.dev/icons?i=js,nodejs,vscode,git,github" alt="Tecnologias utilizadas">
</div>

**Conceitos aplicados:**

- JavaScript e Node.js.
- Programação Orientada a Objetos (POO).
- Classes, objetos e encapsulamento.
- Métodos e construtores.
- Manipulação e tratamento de strings.
- Conversão de tipos de dados.
- Vetores e estruturas de repetição.
- Estruturas condicionais e operações matemáticas.
- Entrada de dados pelo terminal com `prompt-sync`.

## 📁 Estrutura do Projeto

```text
sistema-classificacao-escolar/
│
├── src/
│   ├── models/
│   │   └── Aluno.js
│   │
│   ├── services/
│   │   └── ClassificacaoService.js
│   │
│   ├── interfaces/
│   │   └── InterfaceTerminal.js
│   │
│   └── index.js
│
├── tests/
│   └── Aluno.test.js
│
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## ▶️ Como Executar

**1. Clone o repositório**

```bash
git clone https://github.com/akarolynna/-Sistema-de-Classifica-o-Escolar.git
```

**2. Acesse a pasta do projeto**

```bash
cd Sistema-Classificacao-Escolar
```

**3. Instale as dependências**

```bash
npm install prompt-sync
```

**4. Execute a aplicação**

```bash
node interface.js
```

## 🌱 Próximos Passos

Este projeto está em constante evolução. A proposta é utilizá-lo como espaço de experimentação e aprendizado, implementando novas funcionalidades e aprimorando sua estrutura conforme avanço nos estudos de programação.

---

<div align="center">

**Desenvolvido por Anna Karolynna Mota Corrêa Almeida de Souza💚**

</div>
