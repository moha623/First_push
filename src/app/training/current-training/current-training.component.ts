import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css'],
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timer: any;
  constructor(
    public dialog: MatDialog,
    private trainingService: TrainingService
  ) {}
  ngOnInit(): void {
    const step =
      (this.trainingService.getRunningExercice().duration / 10) * 10000;
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, step);
  }
  onStop() {
    clearInterval(this.timer);
  }
}
