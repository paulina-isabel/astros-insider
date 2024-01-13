describe('template spec', () => {
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

  it('should toggle the homepage between english and spanish at the click of the language button', () => {
    cy.get('#schedule-button').should('have.text', 'View Full Schedule')
    cy.get('#roster-button').should('have.text', 'View Full Roster')
    cy.get('#favorites-button').should('have.text', 'View Favorite Players')
    cy.get('.language-button').should('have.text', 'español')
    cy.get('.language-button').click()
    cy.get('.language-button').should('have.text', 'english')
    cy.get('#schedule-button').should('have.text', 'Calendario Completo')
    cy.get('#roster-button').should('have.text', 'Lista De Jugadores')
    cy.get('#favorites-button').should('have.text', 'Jugadores Favoritos')
    cy.get('.welcome-message').should('have.text', 'Bienvenido a Astros Insider, donde puedes acceder al calendario completo de juegos de la temporada 2024 y ver la lista de jugadores actual del equipo. El calendario y lista son actualizados diario. Agrega un jugador a tus favoritos desde la página de detalles individuales de cualquier jugador para personalizar tu experiencia. ¡Vamos, Astros!')
    cy.get('#schedule-button').click()
    cy.get(':nth-child(1) > .status').should('have.text', 'completo')
    cy.get(':nth-child(3) > .status').should('have.text', 'completo')
    cy.get('#roster-button').click()
    cy.get('[href="/roster/676801"] > .player-card > .player-info > .positions').should('have.text', 'Bat: R Posición: CF')
    cy.get('[href="/roster/643289"] > .player-card').click()
    cy.get('.dob').should('have.text', 'Fecha de Nacimiento: 7/19/1994')
    cy.get('.positions').should('have.text', 'Bat: R Posición: 2B Lanzamiento: R')
    cy.get('.player-height-weight').should('have.text', 'Altura: 6-0 Peso: 173lb')
    cy.get('.last-game').should('have.text', 'Fecha de Juego Mas Reciente: Aug 03 2023 HOU@NYY')
    cy.get('.add-player-to-favorites').click()
    cy.get('#favorites-button').click()
    cy.get('.positions').should('have.text', 'Bat: R Posición: 2B')
    cy.get('.language-button').should('have.text', 'english')
    cy.get('.language-button').click()
    cy.get('#schedule-button').should('have.text', 'View Full Schedule')
    cy.get('#roster-button').should('have.text', 'View Full Roster')
    cy.get('#favorites-button').should('have.text', 'View Favorite Players')
    cy.get('.language-button').should('have.text', 'español')
  })
})