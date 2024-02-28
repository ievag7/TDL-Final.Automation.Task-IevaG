Feature: Cart count update

@wip
Scenario: Add product to cart
    Given I am on the home page
    When I check the initial item count in the cart
    When I select "Women -> Tops" menu category 
    And I filter products based on the "In stock"
    And I click on a product
    And I select size "M"
    And I click the Add to Cart button
    And I click on Proceed To Checkout button
    And I check the item count in the cart
    Then I should see the cart item count increased by 1