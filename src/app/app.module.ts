import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CarSelectionComponent } from './sell-car/car-selection/car-selection.component';
import { LicensePlateSelectionComponent } from './sell-car/license-plate-selection/license-plate-selection.component';
import { VinSelectionComponent } from './sell-car/vin-selection/vin-selection.component';
import { VechileSelectionComponent } from './sell-car/vechile-selection/vechile-selection.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { CarStepperComponent } from './sell-car/car-stepper/car-stepper.component';;
import { VechileDetailsComponent } from './questionaire/vechile-details/vechile-details.component';
import { VechileConditionComponent } from './questionaire/vechile-condition/vechile-condition.component';
import { SellerContactComponent } from './questionaire/seller-contact/seller-contact.component';
import { SellerInstantOfferComponent } from './questionaire/seller-instant-offer/seller-instant-offer.component';
import { HttpClientModule } from '@angular/common/http';
import { VechileBodyConditionComponent } from './questionaire/vechile-body-condition/vechile-body-condition.component';
import { ReviewPageComponent } from './questionaire/review-page/review-page.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { CarLoaderComponent } from './common/car-loader/car-loader.component';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmModalComponent } from './common/confirm-modal/confirm-modal.component';
import { WhatIsVinComponent } from './common/what-is-vin/what-is-vin.component';
import { DialogComponent } from './common/dialog/dialog.component';
import { FormComponent } from './sell-car/form/form.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CarSelectionComponent,
    LicensePlateSelectionComponent,
    VinSelectionComponent,
    VechileSelectionComponent,
    CarStepperComponent,
    WhatIsVinComponent,
    VechileDetailsComponent,
    VechileConditionComponent,
    SellerContactComponent,
    SellerInstantOfferComponent,
    VechileBodyConditionComponent,
    ReviewPageComponent,
    CarLoaderComponent,
    DialogComponent,
    ConfirmModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule,
    MatGridListModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UiSwitchModule,
    ToastrModule.forRoot(),
    MatProgressBarModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
