/// <reference types="Cypress" />
const locators = require('../fixtures/locators.json')

describe ("Login page", () => {
    it("Visit login page", () => {
     cy.visit("/register")
    });

    it("Successful registration", () => {
        cy.visit("/register");
        cy.get(locators.registrationPage.firstNameInputField).type("Vukasin");
        cy.get(locators.registrationPage.LastNameInputField).type("Glogonjac");
        cy.get(locators.registrationPage.emailnputField).type("Vukasin9@gmail.com");
        cy.get(locators.registrationPage.passwordInputField).type("test1234");
        cy.get(locators.registrationPage.passwordConfInputField).type("test1234");
        cy.get(locators.registrationPage.formCheckInput).click();
        cy.get(locators.registrationPage.submitBtn).click();
    });
    
    it("Try to register with an empty input fields", () => {
        cy.visit("/register");
        cy.get(locators.registrationPage.formCheckInput).click();
        cy.get(locators.registrationPage.submitBtn).click();
    });

    it("Try to register with an empty first name input field", () => {
        cy.visit("/register");
        cy.get(locators.registrationPage.LastNameInputField).type("Glogonjac");
        cy.get(locators.registrationPage.emailnputField).type("Vukasin9@gmail.com");
        cy.get(locators.registrationPage.passwordInputField).type("test1234");
        cy.get(locators.registrationPage.passwordConfInputField).type("test1234");
        cy.get(locators.registrationPage.formCheckInput).click();
        cy.get(locators.registrationPage.submitBtn).click();
    });

    it("Try to register with an empty last name input field", () => {
        cy.visit("/register");
        cy.get(locators.registrationPage.firstNameInputField).type("Vukasin"); 
        cy.get(locators.registrationPage.emailnputField).type("Vukasin9@gmail.com");
        cy.get(locators.registrationPage.passwordInputField).type("test1234");
        cy.get(locators.registrationPage.passwordConfInputField).type("test1234");
        cy.get(locators.registrationPage.formCheckInput).click();
        cy.get(locators.registrationPage.submitBtn).click();
    });

    it("Try to register with an empty email input field", () => {
        cy.visit("/register");
        cy.get(locators.registrationPage.firstNameInputField).type("Vukasin");
        cy.get(locators.registrationPage.LastNameInputField).type("Glogonjac");
        cy.get(locators.registrationPage.passwordInputField).type("test1234");
        cy.get(locators.registrationPage.passwordConfInputField).type("test1234");
        cy.get(locators.registrationPage.formCheckInput).click();
        cy.get(locators.registrationPage.submitBtn).click();
    });

    it("Try to register with an empty password input field", () => {
        cy.visit("/register");
        cy.get(locators.registrationPage.firstNameInputField).type("Vukasin");
        cy.get(locators.registrationPage.LastNameInputField).type("Glogonjac");
        cy.get(locators.registrationPage.emailnputField).type("Vukasin9@gmail.com");
        cy.get(locators.registrationPage.passwordConfInputField).type("test1234");
        cy.get(locators.registrationPage.formCheckInput).click();
        cy.get(locators.registrationPage.submitBtn).click();
    });

    it("Try to register with an empty confirm password input field", () => {
        cy.visit("/register");
        cy.get(locators.registrationPage.firstNameInputField).type("Vukasin");
        cy.get(locators.registrationPage.LastNameInputField).type("Glogonjac");
        cy.get(locators.registrationPage.emailnputField).type("Vukasin9@gmail.com");
        cy.get(locators.registrationPage.passwordInputField).type("test1234");
        cy.get(locators.registrationPage.formCheckInput).click();
        cy.get(locators.registrationPage.submitBtn).click();
    });
    
    it("Try to register without accepting terms and conditions", () => {
        cy.visit("/register");
        cy.get(locators.registrationPage.firstNameInputField).type("Vukasin");
        cy.get(locators.registrationPage.LastNameInputField).type("Glogonjac");
        cy.get(locators.registrationPage.emailnputField).type("Vukasin9@gmail.com");
        cy.get(locators.registrationPage.passwordInputField).type("test1234");
        cy.get(locators.registrationPage.passwordConfInputField).type("test1234");
        cy.get(locators.registrationPage.submitBtn).click();
    });
});