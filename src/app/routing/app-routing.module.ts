import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarSelectionComponent } from '../sell-car/car-selection/car-selection.component';

const routes: Routes = [
  { path: '', component: CarSelectionComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
