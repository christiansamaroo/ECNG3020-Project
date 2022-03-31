// Reference- David Akim(2022)

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Transceiver } from '../transceivers.model';
import { TransceiverService } from '../transceivers.service';


@Component({
  selector: 'app-transceivers',
  templateUrl: './transceivers.component.html',
  styleUrls: ['./transceivers.component.css']
})
export class TransceiversComponent implements OnInit {

  constructor(public TransceiverService: TransceiverService) { }
  private transceiverSub: Subscription;
  transceivers: Transceiver[]=[];
  onAdd(Name:string, FrequencyBand:string, MaxFrequency_GHz:string, MinFrequency_GHz:string, OutputPower_dBm:string, Sensitivity_dBm:string, DataRate_kbps:string, url:string){
    this.TransceiverService.addTransceiver(Name, FrequencyBand, MaxFrequency_GHz, MinFrequency_GHz, OutputPower_dBm, Sensitivity_dBm, DataRate_kbps, url)
    .subscribe((std:any)=>{console.log(std)})

  }

  ngOnInit(): void {

    this.transceiverSub = this.TransceiverService.getTransceiver()
    .subscribe((transceiver: Transceiver[])=> {
    
    this.transceivers = transceiver;
  });
  }

}
