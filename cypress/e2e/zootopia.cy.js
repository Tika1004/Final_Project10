import userdata from '../fixtures/data.json'

describe('Zootopia Tests', () => {

it('TC01 - რეგისტრაცია სწორი მონაცემებით', () => {
  cy.registerUser(userdata)
})

it('TC02 - რეგისტრაცია წესებსა და პირობებზე დათანხმების გარეშე', () => {
  cy.registerWithoutAgreement(userdata)
})

it('TC03 - ავტორიზაცია სწორი მონაცემებით', () => {
    cy.loginUser(userdata)
  })

it('TC04 - ავტორიზაცია არასწორი მონაცემებით', () => {
    cy.loginWrong(userdata)
  })

it('TC05 - პროდუქტის კალათაში დამატება', () => {
    cy.addProductToCart()
  })

})
