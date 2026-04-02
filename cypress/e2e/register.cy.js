

describe('Register Page', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:5173/')
  })
  describe('Error Messages', () => {
  it('name input throws error for 2 chars', () => {
    //Arrange
    //cy.visit('http://localhost:5173/')
    //Act
    cy.get(`[data-cy="ad-input"]`).type("ta")
    //Assert
    cy.contains('Adınızı en az 3 karakter giriniz.')
    })
  it('surname input throws error for 2 chars', () => {
    //Arrange
    //cy.visit('http://localhost:5173/')
    //Act
    cy.get(`[data-cy="soyad-input"]`).type("ak")
    //Assert
    cy.contains('Soyadınızı en az 3 karakter giriniz.')
    })  
  it('email input throws error for talha@hotmail.', () => {
    //Arrange
    //cy.visit('http://localhost:5173/')
    //Act
    cy.get(`[data-cy="email-input"]`).type("talha@hotmail.")
    //Assert
    cy.contains('Geçerli bir email adresi giriniz.')
    })    
  it('password input throws error for 1234', () => {
    //Arrange
    cy.visit('http://localhost:5173/')
    //Act
    cy.get(`[data-cy="password-input"]`).type("1234")
    //Assert
    cy.contains('En az 8 karakter, en az 1 büyük harf, en az 1 küçük harf, en az 1 sembol ve en az 1 rakam içermelidir.')
    })
  it('button is disabled for unvalidated inputs', () => {
    //Arrange
    cy.visit('http://localhost:5173/')
    //Act
    cy.get(`[data-cy="password-input"]`).type("1234")
    //Assert
    cy.get(`[data-cy="submit-button"]`).should("be.disabled")
    })         
  })
  describe('Form inputs validated', () => {
    it('button enabled for validated buttons', () => {
      //Arrange
      cy.visit('http://localhost:5173/')
      //Act
      cy.get(`[data-cy="ad-input"]`).type("Talha")
      cy.get(`[data-cy="soyad-input"]`).type("Akın")
      cy.get(`[data-cy="email-input"]`).type("talha@wit.com.tr")
      cy.get(`[data-cy="password-input"]`).type("1234Aa**")
      //Assert
      cy.get(`[data-cy="submit-button"]`).should("be.enabled")
      })
    it('button enabled for validated buttons', () => {
      //Arrange
      cy.visit('http://localhost:5173/')
      //Act
      cy.get(`[data-cy="ad-input"]`).type("Talha")
      cy.get(`[data-cy="soyad-input"]`).type("Akın")
      cy.get(`[data-cy="email-input"]`).type("talha@wit.com.tr")
      cy.get(`[data-cy="password-input"]`).type("1234Aa**")
      cy.get(`[data-cy="submit-button"]`).click()
      //Assert
      cy.get(`[data-cy="response-message"]`).should("be.visible")
    })  
    
  })
    
})