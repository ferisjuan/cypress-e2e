describe('New Payee Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/')
		cy.get('#signin_button').click()

		cy.fixture('user').then(user => {
			cy.get('#user_login').type(user.id)
			cy.get('#user_password').type(user.pwd)
		})

		cy.contains('Sign in').click()
	})
	it('Should add new payee to the list', () => {
		cy.get('#pay_bills_tab').click()
		cy.contains('Add New Payee').click()

		cy.get('#np_new_payee_name').type('Name')
		cy.get('#np_new_payee_address').type('Address')
		cy.get('#np_new_payee_account').type('123456789')
		cy.get('#np_new_payee_details').type('Details')

		cy.get('#add_new_payee').click()
	})

	it('Should display success message', () => {
		cy.get('#alert_container')
			.should('be.visible')
			.and('contain', 'The new payee Name was successfully created.')
	})
})
