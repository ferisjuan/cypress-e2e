describe('Searchbox tests', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/')
	})

	it('should type into searchbox and submit with pressing enter', () => {
		cy.get('#searchTerm').type('some text {enter}')
	})

	it('should show results page', () => {
		cy.get('h2').contains('Search Results')
	})
})
