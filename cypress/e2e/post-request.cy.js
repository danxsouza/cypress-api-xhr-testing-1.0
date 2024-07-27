describe('Post Request', () => {

  it('Create a new post via /post api', () => {
    cy.request({
    method: 'POST',
      url: 'http://localhost:3000/posts',
      body: {
          title: 'Want to learn automation testing?',
           author: 'Danilo B de Souza'
      }
    }).then(response => {
      expect(response.status).to.eq(201);
    })
  })
})