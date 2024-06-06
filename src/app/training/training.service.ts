import { Subject } from 'rxjs';
import { Exercice } from './exercice.model';

export class TrainingService {
 exerciceChanged=new Subject<Exercice>()
  public availableExercices: Exercice[] = [
    { id: 'crunches', name: 'Crunches', duration: 300, calories: 8 },
    { id: 'touch-toes', name: 'Touch-Toes', duration: 1800, calories: 15 },
    { id: 'side-lunges', name: 'Side-Lunges', duration: 1200, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 600, calories: 8 },
  ];
  private runningExercice:Exercice|any;
  // getAvailableExercices() {
  //   this.availableExercices.slice();
  //   console.log(this.availableExercices.slice())
    
  // } doesn't work here i replace directly this methode (available.slice)in newtraining.ts 

startExercice(selectedId:string){
  this.runningExercice= this.availableExercices.find(ex=>ex.id==selectedId);
  this.exerciceChanged.next({...this.runningExercice})
};
getRunningExercice(){
  return {...this.runningExercice}
}
} 
