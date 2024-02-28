Feature: Unregistered user checkout

Scenario: User must sign in before completing checkout
    Given I am on the home page
    When I select "Women -> Tops" menu category 
    And I filter products based on the "In stock"
    And I click on a product
    And I select size "M"
    And I click the Add to Cart button
    And I click on Proceed To Checkout button
    Then I should see a "SHOPPING-CART SUMMARY" page
    And I click on Proceed To Checkout button again
    Then I should see "Create an account" and "Already registered?" fields
  
