/// <reference types="Cypress" />
const locators = require('../fixtures/locators.json')
import { registerPage } from '../fixtures/page_objects/registerPage';
import { faker } from '@faker-js/faker'

describe("Register Page", () => {


it("Visit registration page", () => {
    cy.visit("/register");
    registerPage.firstNameInputField.should('be.visible');
    registerPage.lastNameInputField.should('be.visible');
    registerPage.emailInputField.should('be.visible');
    registerPage.passwordInputField.should('be.visible')
    registerPage.passwordConfInputField.should('be.visible');
    registerPage.formCheckInput.should('be.visible');
    registerPage.submitBtn.should('be.visible');
});


it("Successful registration", () => {
    cy.visit("/register");
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();
    var email = faker.internet.email();
    var password = faker.internet.password();

    registerPage.firstNameInputField.type(firstName);
    registerPage.firstNameInputField.should('have.value', firstName);
    registerPage.lastNameInputField.type(lastName);
    registerPage.lastNameInputField.should('have.value', lastName);
    registerPage.emailInputField.type(email);
    registerPage.emailInputField.should('have.value', email);
    registerPage.passwordInputField.type(password);
    registerPage.passwordInputField.should('have.value', password)
    registerPage.passwordConfInputField.type(password);
    registerPage.passwordConfInputField.should('have.value', password);
    registerPage.formCheckInput.click();
    registerPage.formCheckInput.should('be.checked')
    registerPage.submitBtn.click();
});

it("Try to register with an empty input fields", () => {
    cy.visit("/register");
    registerPage.formCheckInput.click();
    registerPage.submitBtn.click();
    cy.url().should('contain', '/register');
    registerPage.submitBtn.should('be.visible');
    registerPage.registerBtn.should('be.visible');
    registerPage.registerTitle.should('have.text','Register')
});

it("Try to register with an empty first name input field", () => {
    cy.visit("/register");
    registerPage.lastNameInputField.type("Glogonjac");
    registerPage.emailInputField.type(faker.internet.email());
    registerPage.passwordInputField.type("test1234");
    registerPage.passwordConfInputField.type("test1234");
    registerPage.formCheckInput.click();
    registerPage.submitBtn.click();
});

it("Try to register with an empty last name input field", () => {
    cy.visit("/register");
    registerPage.firstNameInputField.type("Vukasin");
    registerPage.emailInputField.type(faker.internet.email());
    registerPage.passwordInputField.type("test1234");
    registerPage.passwordConfInputField.type("test1234");
    registerPage.formCheckInput.click();
    registerPage.submitBtn.click();
});

it("Try to register with an empty email input field", () => {
    cy.visit("/register");
    registerPage.firstNameInputField.type("Vukasin");
    registerPage.lastNameInputField.type("Glogonjac");
    registerPage.passwordInputField.type("test1234");
    registerPage.passwordConfInputField.type("test1234");
    registerPage.formCheckInput.click();
    registerPage.submitBtn.click();
});

it("Try to register with an empty password input field", () => {
    cy.visit("/register");
    registerPage.firstNameInputField.type("Vukasin");
    registerPage.lastNameInputField.type("Glogonjac");
    registerPage.emailInputField.type(faker.internet.email());
    registerPage.passwordConfInputField.type("test1234");
    registerPage.formCheckInput.click();
    registerPage.submitBtn.click();
});

it("Try to register with an empty confirm password input field", () => {
    cy.visit("/register");
    registerPage.firstNameInputField.type("Vukasin");
    registerPage.lastNameInputField.type("Glogonjac");
    registerPage.emailInputField.type(faker.internet.email());
    registerPage.passwordInputField.type("test1234");
    registerPage.formCheckInput.click();
    registerPage.submitBtn.click();
});

it("Try to register without accepting terms and conditions", () => {
    cy.visit("/register");
    registerPage.firstNameInputField.type("Vukasin");
    registerPage.lastNameInputField.type("Glogonjac");
    registerPage.emailInputField.type(faker.internet.email());
    registerPage.passwordInputField.type("test1234");
    registerPage.passwordConfInputField.type("test1234");
    registerPage.submitBtn.click();
});
});