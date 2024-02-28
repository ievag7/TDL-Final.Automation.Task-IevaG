Feature: Cart item removal

@remove
Scenario: Cart becomes empty after removing the only item
    Given I am on the home page
    When I select "Women -> Tops" menu category 
    And I filter products based on the "In stock"
    And I click on a product
    And I select size "M"
    And I click the Add to Cart button
    And I click on Proceed To Checkout button
    And I check the initial item count in the cart
    And I delete one product from the cart
    Then I should see the message "Your shopping cart is empty."

   

