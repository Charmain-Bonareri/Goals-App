import { Component } from '@angular/core';
import { Goal } from './goal'; //imported the goal blueprint class we just created.


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*we create several goals using the goal blueprint class.
inside the appcomponent class we have created object goals and attributed it to the goal blueprint and then
defined the array of goals each with its ID and name.
*/

export class AppComponent {
  goals: Goal[] = [
    {id:1, name:'Watch finding Nemo'},
    {id:2, name:'Buy cookies'},
    {id:3, name:'Get new phone case'},
    {id:4, name:'Get dog food'},
    {id:5, name:'Solve math homework'},
    {id:6, name:'Plot my world domination plan'},
  ];
}
