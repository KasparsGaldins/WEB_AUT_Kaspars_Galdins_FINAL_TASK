describe('Fill Form Test', () => {
  it('Fills the form with specified information and validates the labeled rows', () => {
    // Visit the webpage
    cy.visit('https://demoqa.com/automation-practice-form');

    // Input First Name
    cy.get('#firstName').type('John');

    // Input Last Name
    cy.get('#lastName').type('Doe');

    // Input Email
    cy.get('#userEmail').type('johndoe@example.com');

    // Select Gender as Male
    cy.get('#gender-radio-1').check({ force: true }); // force click to ensure selection

    // Input Mobile Number
    cy.get('#userNumber').type('1234567890');

    // Set Date of Birth to 28th February 1930
    cy.get('.react-datepicker__input-container > input').click();
    cy.get('.react-datepicker__month-select').select('February'); // Select February
    cy.get('.react-datepicker__year-select').select('1930'); // Select 1930
    cy.contains('.react-datepicker__day--028', '28').click(); // Select 28th

    // Set Subject to Economics
    cy.get('#subjectsInput').type('Economics');
    cy.contains('.subjects-auto-complete__menu-list', 'Economics').click();

    // Set Hobbies to Music
    cy.get('#hobbies-checkbox-3').check({ force: true }); // force click to ensure selection

    // Set Current Address
    cy.get('#currentAddress').type('6274 Stander Trail Apt. 273');

    // Set State to NCR
    cy.get('.css-1wa3eu0-placeholder').eq(0).click(); // Click on the dropdown
    cy.get('.css-1wa3eu0-menu').contains('NCR').click(); // Select NCR

    // Set City to Delhi
    cy.get('.css-1wa3eu0-placeholder').eq(1).click(); // Click on the dropdown
    cy.get('.css-1wa3eu0-menu').contains('Delhi').click(); // Select Delhi

    // Click Submit
    cy.get('#submit').click();

    // Validate Labeled Rows
    cy.get('.table-responsive').within(() => {
      cy.contains('tr', 'Student Name').should('contain', 'John Doe');
      cy.contains('tr', 'Student Email').should('contain', 'johndoe@example.com');
      cy.contains('tr', 'Gender').should('contain', 'Male');
      cy.contains('tr', 'Mobile').should('contain', '1234567890');
      cy.contains('tr', 'Date of Birth').should('contain', '28 February, 1930');
      cy.contains('tr', 'Subjects').should('contain', 'Economics');
      cy.contains('tr', 'Hobbies').should('contain', 'Music');
      cy.contains('tr', 'Address').should('contain', '6274 Stander Trail Apt. 273');
      cy.contains('tr', 'State and City').should('contain', 'NCR Delhi');
    });
  });
});
