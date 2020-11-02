describe('Payment Tests', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/')
		cy.get('#signin_button').click()

		cy.fixture('user').then(user => {
			cy.login(user.id, user.pwd)
		})
	})

	it('Should send new payment', () => {
		cy.get('#pay_bills_tab').click()
		cy.contains('Pay Saved Payee').click()
		cy.get('#sp_payee').select('wellsfargo')
		cy.get('#sp_account').select('Credit Card')
		cy.get('#sp_amount').type('2000')
		cy.get('#sp_date').type('2020-11-02 {enter}')
		cy.get('#sp_description').type('some description')
		cy.get('#pay_saved_payees').click()
	})

	it('Should show success message', () => {
		cy.get('#alert_container')
			.should('be.visible')
			.and('contain', 'The payment was successfully submitted.')
	})
})
