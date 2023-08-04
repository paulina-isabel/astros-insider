describe('home page user flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBTeamSchedule?teamID=11', {
      statusCode: 200,
      fixture: '.././fixtures/all-movies-test.json'
    })
    .visit('http://localhost:3000');
  });

  it('should render all necessary elements for homepage view', () => {
    cy.visit('https://example.cypress.io')
  })
})