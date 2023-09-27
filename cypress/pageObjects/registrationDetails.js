 export class registrationDetails{
   weblocators = { 
          firstName:'#input-firstname',
          lastName:'#input-lastname',
          email:'#input-email',
          telephone:'#input-telephone',
          password:'#input-password',
          passwordConfirm: '#input-confirm',
          policyCheckBox: 'input[type="checkbox"]',
          continue :'.btn.btn-primary'
          
   }
openURL()
{
    cy.visit(Cypress.env('URL'))
}
enterFirstName(somename)
{
    cy.get(this.weblocators.firstName).type(somename)
}
enterLastName(lastName)
{
    cy.get(this.weblocators.lastName).type(lastName)
}
enterEmail(email)
{
    cy.get(this.weblocators.email).type(email)
}
enterTelephone(telephone)
{
    cy.get(this.weblocators.telephone).type(telephone)
}
enterPassword(password)
{
    cy.get(this.weblocators.password).type(password)
    cy.get(this.weblocators.passwordConfirm).type(password)
}
selectCheckBox()
{
    cy.get(this.weblocators.policyCheckBox).check()
}
clickOnContinue()
{
    cy.get(this.weblocators.continue).click()
}
}