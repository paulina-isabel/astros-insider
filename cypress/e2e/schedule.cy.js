describe('should show schedule on schedule page', () => {
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

  it.only('shows schedule', () => {
    cy.wait(['@getSchedule', '@getRoster']).then(([scheduleInterception, rosterInterception]) => {
      cy.get('.nav')
        .find('img', '.logo-link')
        .should('have.length', 2)
        .should('have.attr', 'src')
      cy.get('#schedule-button').click()
      cy.get('.background-image-container')
      cy.get('.schedule-header');
      cy.get('.game-card')
        .should('have.length', 12)
        .contains('Aug 04, 2023')
      cy.get('.nav')
        .get(':nth-child(2) > .logolink-img').click()
      cy.url().should('eq', 'http://localhost:3000/')
      cy.get('#schedule-button').click()
      .get(':nth-child(1) > .logolink-img').click()
      cy.url().should('eq', 'http://localhost:3000/')
    });
  })

  it('should handle 500 level errors', () => {
    cy.intercept("GET", "https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBTeamSchedule?teamID=11", {
      statusCode: 500,
      fixture: 'schedule.json'
    })
    cy.get('.nav')
      .find('img', '.logo-link')
      .should('have.length', 2)
      .should('have.attr', 'src')
      .should('include',`/`)
    cy.get('.nav-button')
      .should('have.length', 3)
    cy.get('.background-image-container')
    cy.get('.error-message')
      .contains('Error: 500 -- Please refresh the page.')
  })

  it('should handle 400 level errors', () => {
    cy.intercept("GET", "https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBTeamSchedule?teamID=11", {
      statusCode: 400,
      fixture: 'schedule.json'
    })
    cy.get('.nav')
      .find('img', '.logo-link')
      .should('have.length', 2)
      .should('have.attr', 'src')
      .should('include',`/`)
    cy.get('.nav-button')
      .should('have.length', 3)
    cy.get('.background-image-container')
    cy.get('.error-message')
      .contains('Error: 400 -- Please refresh the page.')
  })
})