import { Component, OnInit } from '@angular/core';
import { TrainingService } from './training.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  onGoiningTraining=false;
  exerciceSubscription:Subscription|any;
  constructor(private trainingService:TrainingService){

  }
  ngOnInit(): void {
  this.exerciceSubscription=  this.trainingService.exerciceChanged.subscribe(exercice=>{
      if (exercice) {
        this.onGoiningTraining=true
      } else {
        this.onGoiningTraining=false;
      }
    })
  }

}
