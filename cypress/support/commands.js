// Comandos customizados reutilizáveis para os testes Cypress

/**
 * cy.login(email, password)
 * Faz login com as credenciais informadas e valida sucesso.
 */
Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login');
    cy.get('input[data-qa="login-email"]').type(email);
    cy.get('input[data-qa="login-password"]').type(password);
    cy.get('button[data-qa="login-button"]').click();

    // Validação simples: presença do link "Logout" indica sessão ativa
    cy.get('.nav.navbar-nav').contains('a', 'Logout').should('be.visible');
});

/**
 * cy.adicionarProdutoAoCarrinho()
 * Adiciona o primeiro produto visível ao carrinho e navega para a página do carrinho.
 */
Cypress.Commands.add('adicionarProdutoAoCarrinho', () => {
    cy.visit('/');
    cy.get('.features_items .single-products').first().within(() => { 
        cy.get('.add-to-cart').first().click();
    });
    cy.get('.modal-content a[href="/view_cart"]').click();
    cy.url().should('include', '/view_cart');
});