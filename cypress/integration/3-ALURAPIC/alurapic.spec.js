describe('Usabilidade tela inicial', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    })

    /*novos casos de teste */
    it('verifica mensagens tela inicial', () => {
        cy.contains('ap-message', 'User name is required').should('be.visible');
        cy.contains('ap-message', 'Password is required').should('be.visible');
        cy.get('button[type="submit"]').should('be.disabled');
    })

    it('verifica botao habilitado na tela inicial', () => {
        cy.get('input[formcontrolname="userName"]').type('Caio');
        cy.get('input[formcontrolname="password"]').type('123');
        cy.get('button[type="submit"]').should('be.enable');
    })

    it('verifica nome da aplicação na tela inicial', () => {
        cy.contains('a', 'ALURAPIC').should('be.visible');
    })

    it('verifica menu clicavel tela inicial', () => {
        cy.get('.navbar-brand > .fa').click();
        cy.get('.menu-bar > .fa').should('be.visible');
    })

    it('digitar um nome de usuario com letra maiuscula', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('Caio');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })
})
