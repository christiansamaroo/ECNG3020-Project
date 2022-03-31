// Reference- David Akim(2022)

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AntennasComponent } from './antennas/antennas.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TransceiversComponent } from './transceivers/transceivers.component';
import { StandardsComponent } from './standards/standards.component';
import { VsatdesignsComponent } from './vsatdesigns/vsatdesigns.component';
import { CubesatdesignsComponent } from './cubesatdesigns/cubesatdesigns.component';
import { UavdesignsComponent } from './uavdesigns/uavdesigns.component';
import { BalloonsatdesignsComponent } from './balloonsatdesigns/balloonsatdesigns.component';
import { HamdesignsComponent } from './hamdesigns/hamdesigns.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AntennasComponent,
    NavbarComponent,
    TransceiversComponent,
    StandardsComponent,
    VsatdesignsComponent,
    CubesatdesignsComponent,
    UavdesignsComponent,
    BalloonsatdesignsComponent,
    HamdesignsComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
