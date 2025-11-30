// Mapeamento e ações do fluxo de registro

class RegistrationPage {
    acessarPaginaLogin() {
        cy.visit('/login');
    }

    // Seletores do formulário de signup
    getInputNameSignup() {
        return cy.get('input[data-qa="signup-name"]');
    }

    getInputEmailSignup() {
        return cy.get('input[data-qa="signup-email"]');
    }

    getButtonSignup() {
        return cy.get('button[data-qa="signup-button"]');
    }
    
    // Inicia o fluxo de registro (primeira etapa)
    iniciarRegistro(name, email) {
        this.acessarPaginaLogin();
        this.getInputNameSignup().type(name);
        this.getInputEmailSignup().type(email);
        this.getButtonSignup().click();
    }
}

export default new RegistrationPage();