describe("App", () => {
    it("Visit my app and check element title", () => {
        cy.visit("/")

        cy.get("title").should("contain", "Feed")
    })
})