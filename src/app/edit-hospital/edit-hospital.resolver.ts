import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseService } from '../services/firebase.service';

@Injectable()
export class EditHospitalResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let hospitalId = route.paramMap.get('id');
      this.firebaseService.getHospital(hospitalId)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}
