Feature: As a user I expect to be able to manage my todos

Scenario: a user can create a todo item
    Given I am a user of todomvc 
    When I create a new todo item "apply for Reach loan"
    Then the todo "apply for Reach loan" appears last on my todo list

Scenario: a user can edit a todo item
    Given I have created a todo item "apply for Reach loan"
    When I edit the todo item "apply for Reach loan" to "rob a bank"
    Then the todo item gets updated with the new changes "rob a bank"

Scenario: a user can delete a todo item
    Given I have created a todo item "apply for Reach loan"
    When I delete the todo item "apply for Reach loan" using the red X
    Then the todo item "apply for Reach loan" is removed from my todo list

# Scenario: a user can mark a todo item as completed
#     Given I have created a todo item "apply for Reach loan"
#     When I mark the todo item "apply for Reach loan" as completed
#     Then the todo item "apply for Reach loan" is marked with a green check mark
#     And the todo item "apply for Reach loan" is crossed off my todo list with a Strikethrough

# Scenario: a user can view only active todos
#     Given I have created a todo item "apply for Reach loan"
#     And I have marked the todo item "apply for Reach loan" as complete
#     When I view the Active list
#     Then only Active todo items are shown

# Scenario: a user can view complete todos
#     Given I have created a todo item "apply for Reach loan"
#     And I have marked the todo item "apply for Reach loan" as complete
#     When I click “Clear Completed”
#     Then the todo item "apply for Reach loan" is removed from my todo list 