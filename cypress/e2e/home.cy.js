describe('schedule user flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBTeamSchedule?teamID=11', {
      statusCode: 200,
      fixture: 'schedule.json'
    }).as('getSchedule');
    cy.intercept('GET', 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBTeamRoster?teamID=11', {
      statusCode: 200,
      fixture: 'roster.json'
    }).as('getRoster');
    cy.visit('http://localhost:3000');
  });

  it('should render all necessary elements for homepage view', () => {
    cy.wait(['@getSchedule', '@getRoster']).then(([scheduleInterception, rosterInterception]) => {
      cy.get('.nav')
        .find('img', '.logo-link')
        .should('have.length', 2)
        .should('have.attr', 'src')
        .should('include',`/`)
      cy.get('.nav-button')
        .should('have.length', 3)
      cy.get('.background-image-container')
      cy.get('.game-card')
        .should('have.length', 1)
      cy.get('.todays-game-header');
    });
  });
});