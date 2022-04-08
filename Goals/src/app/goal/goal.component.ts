import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal'; //imported the goal blueprint class

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {


  goals: Goal[] = [
    {id:1, name:'Watch finding Nemo', description:'Find an online version and watch merlin find his son'},
    {id:2, name:'Buy cookies', description:'I have to buy cookies for the parrot'},
    {id:3, name:'Get new phone case', description:'Diana has her birthday coming up soon'},
    {id:4, name:'Get dog food', description:'Pupper likes expensive snacks'},
    {id:5, name:'Solve math homework', description:'Use solving math'},
    {id:6, name:'Plot my world domination plan', description:'Cause I am an evil overlord'},
  ];

  constructor() { }

  ngOnInit(): void { //ngOnInit is a lifecycle hook, called each time the component is created.
  }

}
