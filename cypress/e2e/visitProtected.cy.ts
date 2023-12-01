import visitProtected from '../support/visitProtected.cy';

describe('Visiting protected routes and signin', () => {
	it('Visits /newPlace and shows title', () => {
		visitProtected('/newPlace');
		cy.get('h1').should('contain', 'Add New Place');
	});

	it('Visits /Place/1 and shows title', () => {
		visitProtected('/Place/1');
		cy.get('h1').should('contain', 'Burj Khalifa');
	});
});
