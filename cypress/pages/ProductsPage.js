// Mapeamento e ações da página de Produtos / Home

class ProductsPage {
    // Seletores
    getSearchBar() {
        return cy.get('input[name="search"]');
    }

    getSearchButton() {
        return cy.get('#submit_search');
    }

    getProductList() {
        return cy.get('.features_items .single-products');
    }
    
    getViewCartLink() {
        return cy.get('.modal-content a[href="/view_cart"]');
    }

    // Ações
    acessarHome() {
        cy.visit('/');
    }

    realizarBusca(termo) {
        this.acessarHome();
        this.getSearchBar().type(termo);
        this.getSearchButton().click();
    }

    adicionarPrimeiroProdutoAoCarrinho() {
        this.getProductList().first().within(() => {
            cy.get('.add-to-cart').first().click();
        });
        this.getViewCartLink().click();
    }
}

export default new ProductsPage();