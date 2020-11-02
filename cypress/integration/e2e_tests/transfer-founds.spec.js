describe('Transfer Founds Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/')
		cy.get('#signin_button').click()

		cy.fixture('user').then(user => {
			cy.login(user.id, user.pwd)
		})
	})

	it('Should fill transfer funds form', () => {
		cy.get('#transfer_funds_tab').click()
		cy.get('#tf_fromAccountId').select('2')
		cy.get('#tf_toAccountId').select('4')
		cy.get('#tf_amount').type('1000')
		cy.get('#tf_description').type('Some description')
		cy.get('#btn_submit').click()
		cy.get('#btn_submit').click()
	})

	it('Should verify correct data', () => {
		cy.get('.alert-success')
			.should('be.visible')
			.and('contain', 'You successfully submitted your transaction.')

		cy.get('.span3').contains('Checking')
		cy.get('.span3').contains('Loan')
		cy.get('.span3').contains('$ 100')
	})
})
