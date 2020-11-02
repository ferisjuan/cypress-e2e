describe('CurrencyExchange Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/')
		cy.get('#signin_button').click()

		cy.fixture('user').then(user => {
			cy.login(user.id, user.pwd)
		})
	})
	it('Should fill conversion form', () => {
		cy.get('#pay_bills_tab').click()
		cy.contains('Pay Saved Payee').click()
		cy.contains('Purchase Foreign Currency').click()

		cy.get('#pc_currency').select('Australia (dollar)')
		cy.get('#pc_amount').type('1000')
		cy.get('#pc_inDollars_true').click()
		cy.get('#pc_calculate_costs').click()
	})

	it('Should display conversion ammount', () => {
		cy.get('#pc_conversion_amount')
			.should('be.visible')
			.and('contain', '910.17 dollar (AUD) = 1000.00 U.S. dollar (USD)')
	})
})
