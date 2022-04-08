import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal'; //imported the goal blueprint class

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {


  goals: Goal[] = [
    {id:1, name:'Watch finding Nemo'},
    {id:2, name:'Buy cookies'},
    {id:3, name:'Get new phone case'},
    {id:4, name:'Get dog food'},
    {id:5, name:'Solve math homework'},
    {id:6, name:'Plot my world domination plan'},
  ];

  constructor() { }

  ngOnInit(): void { //ngOnInit is a lifecycle hook, called each time the component is created.
  }

}
