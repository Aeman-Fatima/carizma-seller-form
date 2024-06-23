import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarStepperComponent } from '../sell-car/car-stepper/car-stepper.component';
import { CarSelectionComponent } from '../sell-car/car-selection/car-selection.component';
import { FormComponent } from '../sell-car/form/form.component';

const routes: Routes = [
  { path: '', component: CarSelectionComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
