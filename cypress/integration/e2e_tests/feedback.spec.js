describe('Feedback Test', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/')
		cy.contains('Feedback').click()
	})
	it('Should load feedback form', () => {
		cy.get('form').should('be.visible')
	})

	it('Should fill the form', () => {
		cy.get('#name').type('Juan Feris')
		cy.get('#email').type('juan@juan.com')
		cy.get('#subject').type('Fake subject')
		cy.get('#comment').type('This is a fake comment')
	})

	it('Should submit the form', () => {
		cy.get('.btn-signin').click()
	})

	it('Should display the Feedback', () => {
		cy.get('#feedback-title').contains('Feedback')
	})
})
