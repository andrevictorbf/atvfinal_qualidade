/// <reference types="cypress" />

// Credenciais do usuário usado nos testes
const TEST_USER_EMAIL = 'qa+202511261430@exemplo.com';
const TEST_USER_PASSWORD = 'Senha@12345';
const TEST_ADDRESS = 'Rua das Oliveiras, 123';

describe('Requisito D - Finalização de Compra', () => {

    beforeEach(() => {
        // Usa comando customizado para efetuar login
        cy.login(TEST_USER_EMAIL, TEST_USER_PASSWORD);

        // Adiciona um produto ao carrinho e inicia checkout
        cy.visit('/');
        cy.get('.features_items .single-products').first().within(() => {
            cy.get('.add-to-cart').first().click();
        });
        cy.get('.modal-content a[href="/view_cart"]').click();
        cy.get('.btn.check_out').click();
        cy.url().should('include', '/checkout');
    });

    it('CT-D-01: Deve completar o fluxo de checkout e finalizar o pedido', () => {
        // Preenche mensagem do pedido e segue para pagamento
        cy.get('textarea[name="message"]').type('Pedido de teste automatizado Cypress.');
        cy.get('a[href="/payment"]').click();

        // Preenche dados do cartão (dados fictícios para ambiente de teste)
        cy.url().should('include', '/payment');
        cy.get('input[name="name_on_card"]').type('CYPRESS QA TEST');
        cy.get('input[name="card_number"]').type('4111222233334444');
        cy.get('input[name="cvc"]').type('123');
        cy.get('input[name="expiry_month"]').type('12');
        cy.get('input[name="expiry_year"]').type('2025');

        cy.get('#submit').click();

        // Confirma pedido finalizado
        cy.url().should('include', '/payment_done');
        cy.contains(/ORDER PLACED!/i).should('be.visible');
    });

    it('CT-D-02: Deve exibir o endereço de entrega cadastrado corretamente no checkout', () => {
        cy.get('#address_delivery').should('contain', TEST_ADDRESS);
        cy.get('#address_invoice').should('contain', TEST_ADDRESS);
    });
});