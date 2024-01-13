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

  it('shows roster, then player details', () => {
    cy.wait(['@getSchedule', '@getRoster']).then(([scheduleInterception, rosterInterception]) => {
      cy.get('.nav')
        .find('img', '.logo-link')
        .should('have.length', 2)
        .should('have.attr', 'src')
      cy.get('#roster-button').click()
      cy.url().should('eq', 'http://localhost:3000/roster')
      cy.get('.roster-container').scrollTo('bottom');
      cy.get('.background-image-container')
      cy.get('.roster-header')
      cy.get('.player-card')
        .should('have.length', 16)
      cy.get('[href="/roster/673237"] > .player-card > .player-headshot > .headshot')
        .should('have.attr', 'src').should('include', 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/673237/headshot/silo/current')
      cy.get('.player-info')
        .contains('Yainer Diaz')
      cy.contains('Bat: R Position: C').click()
      cy.url().should('eq', 'http://localhost:3000/roster/673237')
      cy.get('.details-header')
      cy.get('.player-detail-card')
        .should('have.length', 1)
      cy.get('.details-headshot')
        .should('have.attr', 'src').should('include', 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:silo:current.png/r_max/w_180,q_auto:best/v1/people/673237/headshot/silo/current')
      cy.get('.player-details-container')
        .contains('Yainer Diaz')
      cy.contains('Bat: R Position: C Throw: R')
      cy.contains('DOB: 9/21/1998')
      cy.contains('Height: 6-0 Weight: 195lb')
      cy.contains('Last Game Played:')
      cy.get('.add-player-to-favorites')
        .go(-1).url().should('eq', 'http://localhost:3000/roster')
      cy.get('[href="/roster/670541"] > .player-card').click()
      cy.url().should('eq', 'http://localhost:3000/roster/670541')
    });
  });

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
    cy.contains('Error: 500 -- Please refresh the page.')
  });

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
    cy.contains('Error: 400 -- Please refresh the page.')
  });
})