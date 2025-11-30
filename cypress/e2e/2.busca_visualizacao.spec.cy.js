/// <reference types="cypress" />

describe('Requisito B - Pesquisa e Visualização de Produtos', () => {

    it('CT-B-01: Deve buscar e exibir produtos existentes', () => {
        cy.visit('/');

        // Acessa a página de produtos
        cy.contains('a', 'Products').should('be.visible').click();
        cy.url().should('include', '/products');

        // Realiza a busca por termo conhecido
        cy.get('#search_product', { timeout: 10000 }).type('T-Shirt', { force: true });
        cy.get('#submit_search').click();

        // Validações de resultado
        cy.url().should('include', 'search=T-Shirt');
        cy.get('.title.text-center', { timeout: 10000 }).should('contain.text', 'Searched Products');
        cy.get('.features_items .single-products').its('length').should('be.greaterThan', 0);
    });

    it('CT-B-02: Busca por produto inexistente deve retornar lista vazia (comportamento atual)', () => {
        const termoInexistente = 'PRODUTOINEXISTENTE999';
        cy.visit('/');

        cy.contains('a', 'Products').should('be.visible').click();
        cy.url().should('include', '/products');

        cy.get('#search_product', { timeout: 10000 }).type(termoInexistente, { force: true });
        cy.get('#submit_search').click();

        cy.url().should('include', `search=${termoInexistente}`);
        cy.get('.title.text-center', { timeout: 10000 }).should('contain.text', 'Searched Products');

        // Verifica que não há produtos listados
        cy.get('.features_items').within(() => {
            cy.get('.single-products').should('not.exist');
        });
    });
});