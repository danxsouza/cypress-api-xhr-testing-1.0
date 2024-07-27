/// <reference types="cypress" />

describe('Get Request', () => {
    let result;
    it('Validade Status Code of the /post api', () => {
        result = cy.request('http://localhost:3000/posts');
        result.its('status').should('eq', 200);
    });

    it('Validade /post api contains the correct keys and values', () => {
       cy.request({
           method: 'GET',
           url: 'http://localhost:3000/posts',
           headers: {
               accept: 'application/json'
           }
       }).then(response => {
           let body = JSON.parse(JSON.stringify(response.body));
           cy.log(body);

           expect(body[0]).has.property('title', 'Another Example Json Server');
           expect(body[1]).has.property('title', 'New Example Server');
       })

    });
})