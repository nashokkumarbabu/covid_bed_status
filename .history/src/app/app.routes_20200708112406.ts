import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewHospitalComponent } from './new-hospital/new-hospital.component';
import { EditHospitalComponent } from './edit-hospital/edit-hospital.component';
import { EditHospitalResolver } from './edit-hospital/edit-hospital.resolver';

export const rootRouterConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new-hospital', component: NewHospitalComponent },
  { path: 'details/:id', component: EditHospitalComponent, resolve:{data : EditHospitalResolver} }
];
