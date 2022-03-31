// Reference- David Akim(2022)

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Antenna } from './antennas.model';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class AntennaService {
  private antennas:Antenna[]=[];
  private antennasUpdated = new Subject<Antenna[]>();

  constructor(private web:WebService) { }

  addAntenna(Name:string, FrequencyBand:string, MaxFrequency_GHz:string, MinFrequency_GHz:string, TransmitGain_dBi:string, ReceiveGain_dBi:string, FigureofMerit_dBi_per_K:string, url:string){
    return this.web.post('antennas', {Name, FrequencyBand, MaxFrequency_GHz, MinFrequency_GHz, TransmitGain_dBi, ReceiveGain_dBi, FigureofMerit_dBi_per_K, url});
  }
  getAntenna(){
    return this.web.get('antennas')
  }

  getAntennaUpdateListener(){
    return this.antennasUpdated.asObservable();
  }
}
