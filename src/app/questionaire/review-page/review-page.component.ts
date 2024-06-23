import { Component, EventEmitter, Output } from '@angular/core';
import { ISellerVechileDetails } from 'src/app/models/ISellerVechileDetails';
import { SellCarStoreService } from 'src/app/services/SellCarStore.Service';
import { NHTSAService } from 'src/app/services/nhtsa-service';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css'],
})
export class ReviewPageComponent {
  sellerCarDetails: ISellerVechileDetails;
  selectedMake?: string = '';
  isLoading: boolean = false;

  // checked: boolean = false;
  @Output() reviewPageValidated = new EventEmitter<boolean>();

  // reviewCheckbox = new FormControl(null, Validators.requiredTrue)
  constructor(
    private reviewService: ReviewService,
    public _store: SellCarStoreService,
    private _nhtsaervice: NHTSAService
  ) {
    this.selectedMake = this._store.sellerCompleteDetails.carDetails?.make;
    this.sellerCarDetails = _store.sellerCompleteDetails;

  }

  ngOnInit() {


  }

  routeToStepperIndex(index: number) {
    this.reviewService.setStepperIndex(index);
  }

  navigate() {
    window.open('https://www.carizma.com/terms-and-conditions', '_blank');
      return;
  }
}
