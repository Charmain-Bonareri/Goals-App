import { Component, OnInit } from '@angular/core'; //allows us to do Ipb
import { Goal } from '../goal'; //import the goal blueprint class

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
