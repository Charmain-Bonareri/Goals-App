import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal'; //imported the goal blueprint class

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {


  goals: Goal[] = [
      new Goal(1, 'Watch finding nemo', 'Find an online version and watch merlin find his son'),
      new Goal(2, 'Buy Cookies', 'I have to buy cookies for the parrot'),
      new Goal(3, 'Get new phone case', 'Diana has her birthday coming up soon'),
      new Goal(4, 'Get dog food', 'Pupper likes expensive snacks'),
      new Goal(5, 'Solve math homework', 'Use solving math'),
      new Goal(6, 'Plot my world domination plan', 'Cause I am an evil overlord'),
  ];

  constructor() { }

  ngOnInit(): void { //ngOnInit is a lifecycle hook, called each time the component is created.
  }

}
