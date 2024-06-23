import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-car-selection',
  templateUrl: './car-selection.component.html',
  styleUrls: ['./car-selection.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class CarSelectionComponent {
  questionnaire = false
  toggleQuestionnaire = (questionnaire: boolean) => {
    console.log(questionnaire)
    this.questionnaire = questionnaire;
  }
}
