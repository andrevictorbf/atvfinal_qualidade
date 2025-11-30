# cypress-pos-unipe-IV

> Repositório de atividades e práticas da Turma IV — Módulo de Testes e Qualidade de Software (Unipê).  
> Projeto base do professor Rafael Ramos adaptado para fins didáticos pelo grupo responsável.

Badges: ![status](https://img.shields.io/badge/status-active-brightgreen) ![license](https://img.shields.io/badge/license-MIT-blue)

---

## Índice
- [Sobre](#sobre)
- [Recursos](#recursos)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Executando os testes (Cypress)](#executando-os-testes-cypress)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Contribuidores](#contribuidores)
- [Licença](#licença)
- [Contato](#contato)

---

## Sobre
Este repositório contém atividades, materiais e exemplos relacionados ao ensino de Testes e Qualidade de Software. O foco é demonstrar automação de testes (com Cypress), boas práticas e exercícios aplicados em sala.

## Recursos
- Exemplos de testes end-to-end com Cypress
- Scripts para execução local
- Estrutura pensada para aprendizado e extensão

## Pré-requisitos
- Node.js (v14+ recomendado)
- npm ou yarn
- Windows PowerShell ou CMD (os comandos abaixo usam o terminal integrado do VS Code)

## Instalação
No terminal (na pasta do projeto):
```powershell
npm install
```
ou
```powershell
yarn install
```

## Executando os testes (Cypress)
Abrir interface interativa:
```powershell
npx cypress open
```
Executar em modo headless:
```powershell
npx cypress run
```
Observação: Se houver um servidor backend necessário, inicie-o antes de executar os testes.

## Estrutura do projeto
- cypress/         — testes e fixtures do Cypress
- src/             — código-fonte (quando aplicável)
- package.json     — scripts e dependências
- README.md        — documentação do projeto

(Adapte conforme o conteúdo real presente no repositório.)

## Boas práticas
- Mantenha testes independentes e reprodutíveis.
- Use fixtures para dados estáveis.
- Execute CI com execução headless dos testes.

## Contribuidores
- Grupo Responsável: Andre Victor, Leoncio Fernandes, Igor Brito  
- Projeto base: Professor Rafael Ramos (uso didático)

## Licença
MIT — veja o arquivo LICENSE para detalhes.

## Contato
Para dúvidas sobre o conteúdo deste repositório, abra uma issue ou contate os contribuidores listados.