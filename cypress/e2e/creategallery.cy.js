/// <reference types="Cypress" />
import { createGallery } from "../fixtures/page_objects/creategallery";

describe('Create Gallery page', () => {

    beforeEach(() =>{
        cy.visit('/login')
        createGallery.emailInputField.type('vuleglogonjac@gmail.com');
        createGallery.passwordInputField.type('FIRMAKLISA1989');
        createGallery.loginSubmit.click();
        createGallery.createGalleryBtn.click();

    });

    it('Visit create gallery page', () => {
        createGallery.titleInputField.should('be.visible');
        createGallery.descriptionInputField.should('be.visible')
        createGallery.imageUrlInputField.should('be.visible')
        createGallery.submitBtn.should('be.visible')
    });
    it('Succesfully created gallery', () => {
        createGallery.titleInputField.type('kul naslov');
        createGallery.titleInputField.should('have.value', 'kul naslov')
        createGallery.descriptionInputField.type('lep opis');
        createGallery.descriptionInputField.should('have.value', 'lep opis');
        createGallery.imageUrlInputField.type('https://i.pinimg.com/474x/0e/38/66/0e3866c3be7dacea85ade553b5eac877--fun-art-jpg.jpg');
        createGallery.imageUrlInputField.should('have.value', 'https://i.pinimg.com/474x/0e/38/66/0e3866c3be7dacea85ade553b5eac877--fun-art-jpg.jpg');
        createGallery.submitBtn.click();
        cy.url().should('not.contain','/create');
    });
    it('Try to create new gallery when all input fields are empty',()=>{
        createGallery.submitBtn.click();
        cy.url().should('contain','/create');
    });
    it('Try to create new gallery when gallery title input field is empty',()=>{
        createGallery.descriptionInputField.type('lep opis');
        createGallery.descriptionInputField.should('have.value', 'lep opis');
        createGallery.imageUrlInputField.type('https://i.pinimg.com/474x/0e/38/66/0e3866c3be7dacea85ade553b5eac877--fun-art-jpg.jpg');
        createGallery.imageUrlInputField.should('have.value', 'https://i.pinimg.com/474x/0e/38/66/0e3866c3be7dacea85ade553b5eac877--fun-art-jpg.jpg');
        createGallery.submitBtn.click();
        cy.url().should('contain','/create');
    });
    it('Try to create new gallery with invalid URL in the URL input field',()=>{
        createGallery.titleInputField.type('kul naslov');
        createGallery.titleInputField.should('have.value', 'kul naslov')
        createGallery.descriptionInputField.type('lep opis');
        createGallery.descriptionInputField.should('have.value', 'lep opis');
        createGallery.imageUrlInputField.type('pinimg.com/474x/0e/38/66/0e3866c3be7dacea85ade553b5eac877--fun-art-jpg.jpg');
        createGallery.imageUrlInputField.should('have.value', 'pinimg.com/474x/0e/38/66/0e3866c3be7dacea85ade553b5eac877--fun-art-jpg.jpg');
        createGallery.submitBtn.click();
        cy.url().should('contain','/create');
    });
    it('Try to create new gallery when gallery name contains 1 character', ()=>{
        createGallery.titleInputField.type('k');
        createGallery.titleInputField.should('have.value', 'k')
        createGallery.descriptionInputField.type('lep opis');
        createGallery.descriptionInputField.should('have.value', 'lep opis');
        createGallery.imageUrlInputField.type('https://i.pinimg.com/474x/0e/38/66/0e3866c3be7dacea85ade553b5eac877--fun-art-jpg.jpg');
        createGallery.imageUrlInputField.should('have.value', 'https://i.pinimg.com/474x/0e/38/66/0e3866c3be7dacea85ade553b5eac877--fun-art-jpg.jpg');
        createGallery.submitBtn.click();
        createGallery.alertMsg.should('be.visible');
        cy.url().should('contain','/create');
    });
    it('Try to create new gallery with empty URL input field',()=>{
        createGallery.titleInputField.type('kul naslov');
        createGallery.titleInputField.should('have.value', 'kul naslov')
        createGallery.descriptionInputField.type('lep opis');
        createGallery.descriptionInputField.should('have.value', 'lep opis');
        createGallery.submitBtn.click();
        cy.url().should('contain','/create');
    });
});