describe('Square Size Test', function() {
    it('Assert that the square size is 225x225', function() {
        cy.visit('app/index.html', {failOnStatusCode: false})
        verifyElementDimention('.square', 90, 90)
        longClickElement('.square')
        verifyElementDimention('.square', 225, 225)
    })
})

function getElementDimention(elementClass, dimention){
    return cy.get(elementClass).invoke(dimention)
}

function verifyElementDimention(elementClass, widthInPx, heightInPx){
    getElementDimention(elementClass, 'width').should('be.eq', widthInPx)
    getElementDimention(elementClass, 'height').should('be.eq', heightInPx)
}

function longClickElement(elementClass){
    cy.get(elementClass).trigger('pointerdown', { button: 0})
}

