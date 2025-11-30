/// <reference types="cypress" />

describe('Requisito C - Carrinho de Compras', () => {

    it('CT-C-01: Deve adicionar produto ao carrinho e validar a listagem', () => {
        cy.visit('/');

        // Adiciona o primeiro produto disponível ao carrinho
        cy.get('.features_items .single-products').first().within(() => {
            // Usa .first() para evitar múltiplos matches
            cy.get('.add-to-cart').first().click();
        });

        // Vai para a página do carrinho
        cy.get('.modal-content a[href="/view_cart"]').click();
        cy.url().should('include', '/view_cart');

        // Valida que há pelo menos um item no carrinho
        cy.contains('Shopping Cart').should('be.visible');
        cy.get('.cart_description a').its('length').should('be.greaterThan', 0);
    });

    it('CT-C-02: Deve remover item do carrinho com sucesso', () => {
        cy.visit('/');

        // Adiciona e navega até o carrinho
        cy.get('.features_items .single-products').first().within(() => {
            cy.get('.add-to-cart').first().click();
        });
        cy.get('.modal-content a[href="/view_cart"]').click();
        cy.url().should('include', '/view_cart');

        // Confirma item presente e remove
        cy.get('.cart_description a').its('length').should('be.greaterThan', 0);
        cy.get('.cart_quantity_delete').click();

        // Valida que o carrinho ficou vazio
        cy.contains('Cart is empty!').should('be.visible');
    });
});