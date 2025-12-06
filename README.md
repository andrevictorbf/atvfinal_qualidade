# cypress-pos-unipe-IV

> Repositório de atividades e práticas da Turma IV — Módulo de Testes e Qualidade de Software (Unipê).
> **Este é o repositório de entrega final do Plano de Teste (Seção 4.7)**. Projeto base do professor Rafael Ramos adaptado para fins didáticos pelo grupo responsável.

Badges: ![status](https://img.shields.io/badge/status-active-brightgreen) ![license](https://img.shields.io/badge/license-MIT-blue)

**Aplicação em Teste (SUT):** `https://automationexercise.com/`

---

## Índice
- [Sobre](#sobre)
- [Escopo dos Testes](#escopo-dos-testes)
- [Recursos](#recursos)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Executando os testes (Cypress)](#executando-os-testes-cypress)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Boas Práticas](#boas-práticas)
- [Contribuidores](#contribuidores)
- [Licença](#licença)
- [Contato](#contato)

---

## Sobre
Este repositório contém o conjunto de testes automatizados desenvolvido em **Cypress** como parte do **Projeto de Conclusão do Módulo**. O foco é demonstrar a automação de testes funcionais (E2E e API) aplicados ao **Projeto WebCom** e a utilização de CI/CD (GitHub Actions) para execução e controle de qualidade.

## Escopo dos Testes
A suíte de testes abrange um total de **10 Casos de Teste** (8 E2E e 2 API). O objetivo é garantir a cobertura de regressão dos principais requisitos do sistema (Registro, Pesquisa, Carrinho e Checkout).

*O detalhamento completo dos testes e dos resultados da execução via CI/CD está disponível no documento principal do projeto: **Documentação.docx (Plano de Teste)**.*

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
- Grupo Responsável: Andre Victor, Igor Brito, Leoncio Fernandes
- Projeto base: Professor Rafael Ramos (uso didático)

## Licença
MIT — veja o arquivo LICENSE para detalhes.

## Contato
Para dúvidas sobre o conteúdo deste repositório, abra uma issue ou contate os contribuidores listados.