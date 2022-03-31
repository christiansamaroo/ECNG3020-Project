import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AntennasComponent } from './antennas/antennas.component';
import { HomeComponent } from './home/home.component';
import { TransceiversComponent } from './transceivers/transceivers.component';
import { StandardsComponent } from './standards/standards.component';
import { VsatdesignsComponent } from './vsatdesigns/vsatdesigns.component';
import { CubesatdesignsComponent } from './cubesatdesigns/cubesatdesigns.component';
import { UavdesignsComponent } from './uavdesigns/uavdesigns.component';
import { BalloonsatdesignsComponent } from './balloonsatdesigns/balloonsatdesigns.component';
import { HamdesignsComponent } from './hamdesigns/hamdesigns.component';


const routes: Routes = [
  {
    path:"", component:HomeComponent
  },

  {
    path:"antennas", component:AntennasComponent
  },

  {
    path:"transceivers", component:TransceiversComponent
  },

  {
    path:"standards", component:StandardsComponent
  },

  {
    path:"vsatdesigns", component:VsatdesignsComponent
  },

  {
    path:"cubesatdesigns", component:CubesatdesignsComponent
  },

  {
    path:"uavdesigns", component:UavdesignsComponent
  },

  {
    path:"balloonsatdesigns", component:BalloonsatdesignsComponent
  },

  {
    path:"hamdesigns", component:HamdesignsComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
