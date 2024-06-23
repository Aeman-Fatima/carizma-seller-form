import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';
import { ISellerVechileDetails } from '../models/ISellerVechileDetails';
import { IVechileModelDetails } from '../models/IVechile';
import {
  IContact,
  IVechileConditionQuestionaire,
  IVechileDetailQuestionaire,
} from '../questionaire/questionsJson';

@Injectable({ providedIn: 'root' })
export class SellCarStoreService {
  // - We set the initial state in BehaviorSubject's constructor
  // - Nobody outside the Store should have access to the BehaviorSubject
  //   because it has the write rights
  // - Writing to state should be handled by specialized Store methods (ex: addTodo, removeTodo, etc)
  // - Create one BehaviorSubject per store entity, for example if you have TodoGroups
  //   create a new BehaviorSubject for it, as well as the observable$, and getters/setters

  sellerCompleteDetails: ISellerVechileDetails;
  // Expose the observable$ part of the _todos subject (read only stream)
  // readonly todos$ = this._todos.asObservable();

  constructor() {
    this.sellerCompleteDetails = new ISellerVechileDetails();
    this.loadSellerDetails();
  }
  
  loadSellerDetails() {
    this.sellerCompleteDetails.carDetails = new IVechileModelDetails();

    this.sellerCompleteDetails.contact = new IContact();
    this.sellerCompleteDetails.vehicleCondition =
      new IVechileConditionQuestionaire();
    this.sellerCompleteDetails.vehicleDetails =
      new IVechileDetailQuestionaire();
   
  }

  setCurrentSellVechileDetails(vechileDetails: IVechileModelDetails) {
    this.loadSellerDetails();
    this.sellerCompleteDetails.carDetails = vechileDetails;
  }
}
