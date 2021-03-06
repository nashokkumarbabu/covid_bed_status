import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}

  getAvatars(){
      return this.db.collection('/avatar').valueChanges()
  }

  getUser(userKey){
    return this.db.collection('users').doc(userKey).snapshotChanges();
  }

  updateUser(userKey, value){
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('users').doc(userKey).set(value);
  }

  deleteUser(userKey){
    return this.db.collection('users').doc(userKey).delete();
  }

  getUsers(){
    return this.db.collection('users').snapshotChanges();
  }

  searchUsers(searchValue){
    return this.db.collection('hospitals',ref => ref.where('name', '>=', searchValue)
      .where('name', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  /*
  searchUsersByAge(value){
    return this.db.collection('users',ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }
  */


  createHospital(value, avatar){
    return this.db.collection('hospitals').add({
      name: value.name,
      address: value.address,
      icuAvailBed: value.icuAvailBed,
      icuOccupiedBed: value.icuOccupiedBed,
      location: value.location
    });
  }
}
