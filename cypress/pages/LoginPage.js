// Mapeamento e ações da página de Login

class LoginPage {
    // Seletores
    getInputEmailLogin() {
        return cy.get('input[data-qa="login-email"]');
    }

    getInputPasswordLogin() {
        return cy.get('input[data-qa="login-password"]');
    }

    getButtonLogin() {
        return cy.get('button[data-qa="login-button"]');
    }
    
    getErrorMessage() {
        return cy.contains('Incorrect email or password!');
    }

    // Ações
    acessarPaginaLogin() {
        cy.visit('/login');
    }

    fazerLogin(email, password) {
        this.acessarPaginaLogin();
        this.getInputEmailLogin().type(email);
        this.getInputPasswordLogin().type(password);
        this.getButtonLogin().click();
    }
}

export default new LoginPage();