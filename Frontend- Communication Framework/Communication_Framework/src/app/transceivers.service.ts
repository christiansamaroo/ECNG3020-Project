// Reference- David Akim(2022)

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Transceiver } from './transceivers.model';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class TransceiverService {
  private transceivers:Transceiver[]=[];
  private transceiversUpdated = new Subject<Transceiver[]>();

  constructor(private web:WebService) { }

  addTransceiver(Name:string, FrequencyBand:string, MaxFrequency_GHz:string, MinFrequency_GHz:string, OutputPower_dBm:string, Sensitivity_dBm:string, DataRate_kbps:string, url:string){
    return this.web.post('transceivers', {Name, FrequencyBand, MaxFrequency_GHz, MinFrequency_GHz, OutputPower_dBm, Sensitivity_dBm, DataRate_kbps, url});
  }
  getTransceiver(){
    return this.web.get('transceivers')
  }

  getTransceiverUpdateListener(){
    return this.transceiversUpdated.asObservable();
  }
}