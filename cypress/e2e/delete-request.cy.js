describe('Delete Request', () => {

    it('Delete a post via /post api', () => {
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:3000/posts/2d61',
        }).then(response => {
            expect(response.status).to.eq(200);
        })
    })
})