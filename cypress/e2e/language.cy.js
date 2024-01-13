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
  });

  it('should toggle the schedule between english and spanish at the click of the language button', () => {
    cy.get('#schedule-button').click()
  })
})

// cy.get('.empty-message')
//   .contains('Agrega un jugador a tus favoritos para ver su tarjeta de jugador aquí')
// cy.get('#roster-button').should('have.text', 'Lista De Jugadores');