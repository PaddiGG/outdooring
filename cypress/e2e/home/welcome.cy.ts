describe('home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays two todo items by default', () => {
    cy.get('h1').should('contain.text', 'When')
    const emojis = ['βοΈ', 'π¬', 'π΄ββοΈ', 'πΆββοΈ']
    emojis.forEach((emoji) => cy.get('h2').should('contain.text', emoji))
  })
})
