import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}

  
  getAvatars(){
      //return this.db.collection('/avatar').valueChanges()
      return null;
  }

  getHospital(hospitalKey){
    return this.db.collection('hospitals').doc(hospitalKey).snapshotChanges();
  }

  updateHospital(hospitalKey, value){
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('hospitals').doc(hospitalKey).set(value);
  }

  deleteHospital(hospitalKey){
    return this.db.collection('hospitals').doc(hospitalKey).delete();
  }

  getHospitals(){
    return this.db.collection('hospitals').snapshotChanges();
  }

  searchHospitals(searchValue){
    return this.db.collection('hospitals',ref => ref.where('name', '>=', searchValue)
      .where('name', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  /*
  searchHospitalsByAge(value){
    return this.db.collection('hospitals',ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }
  */


  createHospital(value, avatar){
    return this.db.collection('hospitals').add({
      name: value.name,
      address: value.address,
      icuTotalBed: value.icuAvailBed,
      icuOccupiedBed: value.icuOccupiedBed,
      generalTotalBed: value.generalTotalBed,
      generalOccupiedBed: value.generalOccupiedBed,
      location: value.location
    });
  }
}
