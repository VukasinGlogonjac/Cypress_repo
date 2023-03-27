class CreateGallery {
get emailInputField() {
    return cy.get("#email")
};
get passwordInputField() {
    return cy.get("#password")
};
get loginSubmit() {
    return cy.get("button[type='submit']")
};
get createGalleryBtn() {
    return cy.get("a[href='/create']")
};
get titleInputField() {
    return cy.get("#title")
};
get descriptionInputField() {
    return cy.get("#description")
};
get imageUrlInputField() {
    return cy.get("input[type='url']")
};
get submitBtn() {
    return cy.get ("div.container:nth-child(2) div:nth-child(1) div:nth-child(1) form:nth-child(2) > button.btn.btn-custom:nth-child(4)")
}
get alertMsg() {
    return cy.get("p[class='alert alert-danger']")
};
};
export const createGallery = new CreateGallery();