/// <reference types="cypress" />
import RegistrationPage from '../pages/RegistrationPage';

const weakPassword = '123';

describe('Requisito A - Registro de Usuário', () => {

    it('CT-A-01: Deve realizar o registro completo com dados válidos', () => {
        const email = `qa.registro.${Date.now()}@exemplo.com`;

        RegistrationPage.iniciarRegistro('Teste Automacao QA', email);

        cy.url().should('include', '/signup');

        cy.get('#id_gender1').click();
        cy.get('#password').type('SenhaForte123456');
        cy.get('#days').select('15');
        cy.get('#months').select('June');
        cy.get('#years').select('1990');

        cy.get('#first_name').type('Nome');
        cy.get('#last_name').type('Sobrenome');
        cy.get('#address1').type('Rua Cypress, 123');

        cy.get('#country').select(1, { force: true });
        cy.get('#state').type('Paraíba');
        cy.get('#city').type('João Pessoa');
        cy.get('#zipcode').type('58000000');
        cy.get('#mobile_number').type('83999998888');

        cy.get('button[data-qa="create-account"]').click();

        cy.url().should('include', '/account_created');
        cy.contains(/account created/i).should('be.visible');
    });

    it('CT-A-03: Deve permitir criar conta com senha fraca (comportamento atual)', () => {
        const email = `qa.senha.fraca.${Date.now()}@exemplo.com`;

        RegistrationPage.iniciarRegistro('Teste Senha Fraca', email);

        cy.url().should('include', '/signup');

        cy.get('#id_gender1').click();
        cy.get('#password').type(weakPassword);

        // Dados mínimos obrigatórios
        cy.get('#days').select('1');
        cy.get('#months').select('January');
        cy.get('#years').select('2000');
        cy.get('#first_name').type('Bug');
        cy.get('#last_name').type('Senha');
        cy.get('#address1').type('Rua do Bug, 1');

        cy.get('#country').select(1, { force: true });
        cy.get('#state').type('PB');
        cy.get('#city').type('JP');
        cy.get('#zipcode').type('58000000');
        cy.get('#mobile_number').type('83900000000');

        cy.get('button[data-qa="create-account"]').click();

        cy.url().should('include', '/account_created');
        cy.contains(/account created/i).should('be.visible');
    });
});