describe('Website Journey', () => {
  const menu = {
    articles: "navigation-1",
    about: "navigation-2",
    socials: "navigation-3"
  }

  beforeEach(() => {
    cy.visit('/')
  })

  it("Navigate through articles", () => {
    cy.getByDataID(menu.articles).click()
    cy.getByDataID('article-0').click()
    cy.scrollTo('bottom', { duration: 5000 });
  })

  it("Navigate through about", () => {
    cy.getByDataID(menu.about).click()
  })

  it("Navigate through socials", () => {
    cy.getByDataID(menu.socials).click()

    cy.get('.link').each((element) => {
      cy.wrap(element).click();
    });
  })
})