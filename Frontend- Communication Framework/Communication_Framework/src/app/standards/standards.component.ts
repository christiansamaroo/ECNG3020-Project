// Reference- David Akim(2022)

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Standard } from '../standards.model';
import { StandardService } from '../standards.service';


@Component({
  selector: 'app-standards',
  templateUrl: './standards.component.html',
  styleUrls: ['./standards.component.css']
})
export class StandardsComponent implements OnInit {

  constructor(public StandardService: StandardService) { }
  private standardSub: Subscription;
  standards: Standard[]=[];
  onAdd(Name:string, Technology:string, MaxOperatingFrequency_GHz:string, MinOperatingFrequency_GHz:string, Bandwidth_MHz:string, PowerAntenna_dBW:string, RainRate_mm_per_h:string, url:string){
    this.StandardService.addStandard(Name, Technology, MaxOperatingFrequency_GHz, MinOperatingFrequency_GHz, Bandwidth_MHz, PowerAntenna_dBW, RainRate_mm_per_h, url)
    .subscribe((std:any)=>{console.log(std)})

  }

  ngOnInit(): void {

    this.standardSub = this.StandardService.getStandard()
    .subscribe((standard: Standard[])=> {
    
    this.standards = standard;
  });
  }

}

