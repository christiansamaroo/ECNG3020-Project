// Reference- David Akim(2022)

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Standard } from './standards.model';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class StandardService {
  private standards:Standard[]=[];
  private standardsUpdated = new Subject<Standard[]>();

  constructor(private web:WebService) { }

  addStandard(Name:string, Technology:string, MaxOperatingFrequency_GHz:string, MinOperatingFrequency_GHz:string, Bandwidth_MHz:string, PowerAntenna_dBW:string, RainRate_mm_per_h:string, url:string){
    return this.web.post('standards', {Name, Technology, MaxOperatingFrequency_GHz, MinOperatingFrequency_GHz, Bandwidth_MHz, PowerAntenna_dBW, RainRate_mm_per_h, url});
  }
  getStandard(){
    return this.web.get('standards')
  }

  getStandardUpdateListener(){
    return this.standardsUpdated.asObservable();
  }
}

