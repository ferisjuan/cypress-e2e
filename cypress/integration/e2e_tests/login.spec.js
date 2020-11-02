describe('Login / Logout Test', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/')
		cy.get('#signin_button').click()
	})

	it('Should try to login with invalid data', () => {
		cy.get('#login_form').should('be.visible')

		cy.login('invalid username', 'invalid password')
	})

	it('Should display error message', () => {
		cy.get('.alert-error')
			.should('be.be.visible')
			.and('contain', 'Login and/or password are wrong.')
	})

	it('Should login to application', () => {
		cy.fixture('user').then(user => {
			const username = user.id
			const password = user.pwd

			cy.login(username, password)
		})
		cy.get('ul.nav-tabs').should('be.be.visible')
	})

	it('Should logout from application', () => {
		cy.contains('username').click()
		cy.get('#logout_link').click()
		cy.url().should('include', 'index.html')
	})
})
