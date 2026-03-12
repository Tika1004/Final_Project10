Cypress.Commands.add('registerUser', (data) => {
  cy.visit('https://testzootopia.loremipsum.ge/ka/register')
  cy.contains('შესვლა').click({ force: true })
  cy.contains('გაიარეთ რეგისტრაცია').click({ force: true }) // Force true cypress - ის მიერ დამატებული პარამეტრია, რომელიც საშუალებას აძლევს ელემენტზე კლიკი განხორციელდეს მაშინაც კი, თუ ის არ არის სრულად ხილული ან გადაფარულია სხვა ელემენტით. ეს განსაკუთრებით გამოსადეგია ისეთ შემთხვევებში, როდესაც ელემენტი შეიძლება იყოს დროებით დაფარული ან არ იყოს სრულად ხილული, მაგრამ მაინც საჭიროა მასზე კლიკი. ამ შემთხვევაში, რეგისტრაციის ღილაკზე კლიკი განხორციელდება მაშინაც კი, თუ ის არ არის სრულად ხილული, რაც ხელს შეუწყობს რეგისტრაციის პროცესის წარმატებით დასრულებას.
  cy.get('input[name="first_name"]').should('be.visible').type(data.firstname_lastname)
  cy.get('input[name="reg_email"]').should('be.visible').type(data.email)
  cy.get('input[name="phone"]').should('be.visible').type(data.phone)
  cy.get('input[name="personal_id"]').should('be.visible').type(data.personalNumber)
  cy.get('input[name="reg_password"]').should('be.visible').type(data.password)
  cy.get('input[name="reg_password_confirmation"]').should('be.visible').type(data.password)
  cy.get('input[type="checkbox"]').check({ force: true })
  cy.contains('რეგისტრაცია').click({ force: true }) 
})

Cypress.Commands.add('registerWithoutAgreement', (data) => {
  cy.visit('https://testzootopia.loremipsum.ge/ka/register')
  cy.contains('შესვლა').click({ force: true })
  cy.contains('გაიარეთ რეგისტრაცია').click({ force: true })
  cy.get('input[name="first_name"]').type(data.firstname_lastname).should('have.value', data.firstname_lastname)    
  cy.get('input[name="reg_email"]').type(data.email).should('have.value', data.email)               
  cy.get('input[name="phone"]').type(data.phone)
  cy.get('input[name="personal_id"]').type(data.personalNumber)
  cy.get('input[name="reg_password"]').type(data.password)
  cy.get('input[name="reg_password_confirmation"]').type(data.password)
  cy.contains('რეგისტრაცია').click({ force: true })
  cy.get('input#etx.procheck').should('not.be.checked').and('have.css', 'border-color')                
})

Cypress.Commands.add('loginUser', (data) => {
  cy.visit('https://testzootopia.loremipsum.ge/ka')
  cy.contains('შესვლა').click({ force: true })
  cy.get('input[name="login_email"]').should('be.visible').type(data.email)
  cy.get('input[name="login_password"]').should('be.visible').type(data.password)
  cy.contains('შესვლა').click({ force: true })   
})

Cypress.Commands.add('loginWrong', (data) => {
  cy.visit('https://testzootopia.loremipsum.ge/ka')
  cy.contains('შესვლა').click({ force: true })
  cy.get('input[name="login_email"]').should('be.visible').type(data.wrongEmail)
  cy.get('input[name="login_password"]').should('be.visible').type(data.wrongPassword)
  cy.contains('შესვლა').click({ force: true })
})

Cypress.Commands.add('addProductToCart', () => {
  cy.visit('https://testzootopia.loremipsum.ge/ka')
  cy.get('.product-cart').should('be.visible')
  cy.get('.product-cart').first().click()
})


