Feature: Product search functionality

@search
Scenario: Users can find a product by searching
    Given I am on the home page
    When I enter the text <product> into the search box
    And I click on the search button
    Then I am on products page
    And I should see only searched <product> results

    Examples: 

    |  product | 
    | "Blouse" |


