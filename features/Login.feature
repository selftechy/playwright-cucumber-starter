@login
Feature: Validate user login

    @Scenario, @UserLogin
    Scenario: To verify standard user login
        Given the application is opened in a browser 
        When valid user login to the application
        Then the home page is displayed


        