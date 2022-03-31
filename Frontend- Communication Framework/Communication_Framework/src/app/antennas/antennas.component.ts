// Reference- David Akim(2022)

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Antenna } from '../antennas.model';
import { AntennaService } from '../antennas.service';


@Component({
  selector: 'app-antennas',
  templateUrl: './antennas.component.html',
  styleUrls: ['./antennas.component.css']
})
export class AntennasComponent implements OnInit {

  constructor(public AntennaService: AntennaService) { }
  private antennaSub: Subscription;
  antennas: Antenna[]=[];
  onAdd(Name:string, FrequencyBand:string, MaxFrequency_GHz:string, MinFrequency_GHz:string, TransmitGain_dBi:string, ReceiveGain_dBi:string, FigureofMerit_dBi_per_K:string, url:string){
    this.AntennaService.addAntenna(Name, FrequencyBand, MaxFrequency_GHz, MinFrequency_GHz, TransmitGain_dBi, ReceiveGain_dBi, FigureofMerit_dBi_per_K, url)
    .subscribe((std:any)=>{console.log(std)})

  }

  ngOnInit(): void {

    this.antennaSub = this.AntennaService.getAntenna()
    .subscribe((antenna: Antenna[])=> {
    
    this.antennas = antenna;
  });
  }

}
