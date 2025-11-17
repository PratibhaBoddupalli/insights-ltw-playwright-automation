Feature: User login

Scenario: Succesful Login via external auth page
  Given the user logs in via the external auth page
  Then the user should be logged in successfully
