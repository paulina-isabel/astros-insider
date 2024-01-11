describe('should show roster on roster page', () => {
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

  it('shows favorites page with correct players', () => {
    cy.wait(['@getSchedule', '@getRoster']).then(([scheduleInterception, rosterInterception]) => {
      cy.get('.nav')
        .find('img', '.logo-link')
        .should('have.length', 2)
        .should('have.attr', 'src')
      cy.get('#favorites-button').click()
      cy.url().should('eq', 'http://localhost:3000/favorites')
      cy.get('.background-image-container')
      cy.get('.favorites-header')
      cy.get('.empty-message')
        .contains('Add a player to your favorites to see his player card here')
      cy.get('#roster-button').click()
      cy.get('[href="/roster/676801"] > .player-card').click()
      cy.url().should('eq', 'http://localhost:3000/roster/676801')
      cy.get('.add-player-to-favorites').click()
      cy.get('#favorites-button').click()
      cy.url().should('eq', 'http://localhost:3000/favorites')
      cy.get('.player-card')
        .should('have.length', 1)
      cy.get('.player-card-container')
        .contains('Chas McCormick')
        .go(-2).url()
      cy.get('[href="/roster/643289"] > .player-card').click()
      cy.url().should('eq', 'http://localhost:3000/roster/643289')
      cy.get('.add-player-to-favorites').click()
      cy.get('#favorites-button').click()
      cy.url().should('eq', 'http://localhost:3000/favorites')
      cy.get('.player-card')
        .should('have.length', 2)
      cy.get('[href="/roster/643289"] > .player-card').click()
      cy.get('.add-player-to-favorites').click()
      cy.get('#favorites-button').click()
      cy.url().should('eq', 'http://localhost:3000/favorites')
      cy.get('.player-card')
        .should('have.length', 1)
    });
  })

  it('should handle 500 level errors', () => {
    cy.intercept("GET", "https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBTeamRoster?teamID=11", {
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
    cy.intercept("GET", "https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBTeamRoster?teamID=11", {
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