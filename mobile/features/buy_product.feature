Feature: Purchase Flow

  Scenario Outline: Successfully purchase a product
    Given I am on the Products screen
    When on "<scroll>" I select the product at position "<index>"
    Then I verify the "<product>" and the "<price>"
    When I add the product to the cart
    Then the number 1 is displayed on the cart icon
    When I click on the cart
    Then I verify the "<product>" and the "<price>" in the cart

    Examples:
      | product                      | price   | scroll | index |
      | Sauce Labs Backpack          | $ 29.99 |      0 |     0 |
      | Sauce Labs Backpack (yellow) | $ 29.99 |      1 |     1 |
