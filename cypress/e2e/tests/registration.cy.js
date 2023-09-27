/// <reference types = "cypress"/>
import { registrationDetails } from "../../pageObjects/registrationDetails"
const registerObj=new registrationDetails()
import registerDetails from "../../fixtures/registerDetails.json"
describe('end to end testing',()=>{
    it('end to end flow', ()=>
    {
        registerObj.openURL()
        registerObj.enterFirstName(registerDetails.firstName)
        registerObj.enterLastName(registerDetails.lastName)
        registerObj.enterEmail(registerDetails.email)
        registerObj.enterTelephone(registerDetails.telephone)
        registerObj.enterPassword(registerDetails.password)
        registerObj.selectCheckBox()
        registerObj.clickOnContinue()

        
    })
})