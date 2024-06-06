import { Component, OnInit } from '@angular/core';
import { Exercice } from '../exercice.model';
import { TrainingService } from '../training.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css'],
})
export class NewTrainingComponent implements OnInit {
  excercices: Exercice[] = [];

  constructor(public trainingService: TrainingService) {}

  ngOnInit() {
    this.excercices = this.trainingService.availableExercices.slice();
    // console.log(this.excercices)
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercice(form.value.exercice);
  }
}
