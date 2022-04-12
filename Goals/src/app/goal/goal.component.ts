import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal'; //imported the goal blueprint class

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {


  goals: Goal[] = [
      new Goal(1, 'Watch finding nemo', 'Find an online version and watch merlin find his son', new Date(2020,3,14)),
      new Goal(2, 'Buy Cookies', 'I have to buy cookies for the parrot', new Date(2019,6,9)),
      new Goal(3, 'Get new phone case', 'Diana has her birthday coming up soon', new Date (2019,6,9)),
      new Goal(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2022,1,12)),
      new Goal(4, 'Get dog food', 'Pupper likes expensive snacks', new Date(2019,0,18)),
      new Goal(5, 'Solve math homework', 'Use solving math', new Date(2019,2,14)),
      new Goal(6, 'Plot my world domination plan', 'Cause I am an evil overlord', new Date(2030,3,14)),
  ];


  toogleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  completeGoal(isComplete, index){
    if(isComplete){
      this.goals.splice(index,1);
    }
  }
  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void { //ngOnInit is a lifecycle hook, called each time the component is created.
  }

}
