/// <reference types="Cypress" />
const locators = require('../fixtures/locators.json')
import { registerPage } from '../fixtures/page_objects/registerPage';

describe("Login page", () => {
    it("Visit login page", () => {
        cy.visit("/register")
    });

    it("Successful registration", () => {
        cy.visit("/register");
        registerPage.firstNameInputField.type("Vukasin");
        registerPage.lastNameInputField.type("Glogonjac");
        registerPage.emailInputField.type("Vukasin9@gmail.com");
        registerPage.passwordInputField.type("test1234");
        registerPage.passwordConfInputField.type("test1234");
        registerPage.formCheckInput.click();
        registerPage.submitBtn.click();
    });

    it("Try to register with an empty input fields", () => {
        cy.visit("/register");
        registerPage.formCheckInput.click();
        registerPage.submitBtn.click();
    });

    it("Try to register with an empty first name input field", () => {
        cy.visit("/register");
        registerPage.lastNameInputField.type("Glogonjac");
        registerPage.emailInputField.type("Vukasin9@gmail.com");
        registerPage.passwordInputField.type("test1234");
        registerPage.passwordConfInputField.type("test1234");
        registerPage.formCheckInput.click();
        registerPage.submitBtn.click();
    });

    it("Try to register with an empty last name input field", () => {
        cy.visit("/register");
        registerPage.firstNameInputField.type("Vukasin");
        registerPage.emailInputField.type("Vukasin9@gmail.com");
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
        registerPage.emailInputField.type("Vukasin9@gmail.com");
        registerPage.passwordConfInputField.type("test1234");
        registerPage.formCheckInput.click();
        registerPage.submitBtn.click();
    });

    it("Try to register with an empty confirm password input field", () => {
        cy.visit("/register");
        registerPage.firstNameInputField.type("Vukasin");
        registerPage.lastNameInputField.type("Glogonjac");
        registerPage.emailInputField.type("Vukasin9@gmail.com");
        registerPage.passwordInputField.type("test1234");
        registerPage.formCheckInput.click();
        registerPage.submitBtn.click();
    });

    it("Try to register without accepting terms and conditions", () => {
        cy.visit("/register");
        registerPage.firstNameInputField.type("Vukasin");
        registerPage.lastNameInputField.type("Glogonjac");
        registerPage.emailInputField.type("Vukasin9@gmail.com");
        registerPage.passwordInputField.type("test1234");
        registerPage.passwordConfInputField.type("test1234");
        registerPage.submitBtn.click();
    });
});