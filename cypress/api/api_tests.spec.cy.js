/// <reference types="cypress" />

// Usuário real previamente cadastrado no fluxo de registro automatizado
const REAL_USER_EMAIL = 'qa+202511261430@exemplo.com';
const REAL_USER_PASSWORD = 'Senha@12345';

describe('API - Testes de Pesquisa e Login', () => {

    it('TC-API-01: Deve buscar produtos contendo o termo "dress"', () => {
        cy.request({
            method: 'POST',
            url: '/api/searchProduct',
            form: true,
            body: { search_product: 'dress' }
        }).then((response) => {

            expect(response.status).to.equal(200);

            const data = JSON.parse(response.body);

            expect(data).to.have.property('responseCode', 200);
            expect(data.products).to.be.an('array').and.not.empty;

            // Confirma que o termo aparece no nome ou categoria
            for (const product of data.products) {
                const name = product.name.toLowerCase();
                const category = product.category.category.toLowerCase();

                expect(name.includes('dress') || category.includes('dress')).to.be.true;
            }
        });
    });

    it('TC-API-02: Deve realizar login via API com credenciais válidas', () => {
        cy.request({
            method: 'POST',
            url: '/api/verifyLogin',
            form: true,
            body: {
                email: REAL_USER_EMAIL,
                password: REAL_USER_PASSWORD
            }
        }).then((response) => {

            expect(response.status).to.equal(200);

            const data = JSON.parse(response.body);

            expect(data).to.have.property('responseCode', 200);
            expect(data.message).to.equal('User exists!');
        });
    });
});