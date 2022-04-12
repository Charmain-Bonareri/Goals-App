import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'; //allows us to do Ipb
import { Goal } from '../goal'; //import the goal blueprint class

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  @Input () goal:Goal;
  @Output () isComplete = new EventEmitter<boolean>();

  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
