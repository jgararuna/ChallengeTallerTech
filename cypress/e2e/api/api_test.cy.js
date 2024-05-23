/// <reference types="Cypress" />

describe('API - Teste funcional de Login', () => {

    it('Deve validar senha incorreta', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.org/posts',
            failOnStatusCode: false
        }).then((response) => {           
            cy.log('| slug | status | publishedAt | updatedAt |') 
              .log('| ---- | ------ | ----------- | --------- |')
              .log(cy.recursionLoop(times  => {
                cy.log(response.body[times-1].slug + " | " + response.body[times-1].status + " | " + response.body[times-1].publishedAt + " | " + response.body[times-1].updatedAt + " | ")
                return times < response.body.length;
              }))               
        })
    });

});