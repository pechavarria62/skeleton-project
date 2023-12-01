describe('Visiting Home Page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/', {
			failOnStatusCode: false,
		});
	});
	it('loads body', () => {
		cy.get('body').should('be.visible');
	});
	it('loads Burj Khalifa Image', () => {
		cy.get('img[alt="Burj Khalifa"]').should('be.visible');
	});
});
