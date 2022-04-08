/*
-Our goal blueprint is goal.ts

-We moved the logic from the app component to the goal component

The ngIf commands simply checks if a condition is met and performs an action based on that condition.
on line 8, we check if the length of the goals array is more than 5, then display the text in the paragraph.

- ngOnInit is a lifecycle hook. It is called each time the component is created. We use it to put complex initialization logic that we
want for the component.

-we moved the template logic from app.html to goal component.

Nesting components
-We have all our goals inside the goal component, now we make it available as a child component of the root component, appcomponent.
-Using the goalcomponent selector,lets nest the goal component inside the appcoponent to display the contents of the goal component.

-Nesting ensures the child component is loaded while inside the parent component.

Child components
-we want to give our goals additional description, we will create a goaldetail coponent that is a child of the goal component.
-the goaldetail component will be responsible for displaying the details of each goal.
*/
