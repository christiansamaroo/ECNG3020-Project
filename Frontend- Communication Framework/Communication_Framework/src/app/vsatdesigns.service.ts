// Reference- David Akim(2022)

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Vsatdesign } from './vsatdesigns.model';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class VsatdesignService {
  private vsatdesigns:Vsatdesign[]=[];
  private vsatdesignsUpdated = new Subject<Vsatdesign[]>();

  constructor(private web:WebService) { }

  addVsatdesign(DesignNumber: string,

    ES_latitude: string,

    ES_longtitude: string,

    S_longtitude: string,

    AzimuthNW: string,

    AzimuthNE: string,

    AzimuthSW: string,

    AzimuthSE: string,

    SlantRange_km: string,

    ElevationAngle: string,

    RainRate_mm_per_h: string,

    RainRateCoefficient: string,

    RainRatePower: string,

    RainLoss_dB: string,

    UplinkFrequency_MHz: string,

    FSPLUplink_dB:string,
    
    ESFeederLoss_dB: string,

    AntennaMisalignmentLoss_dB: string,

    PolarizationMisalignmentLoss_dB: string,

    AtmosphericAbsorptionLoss_dB: string,

    UplinkTotalLosses_dB: string,

    PowerESAntenna_dB: string,

    GainESAntenna_dB: string,

    GainSatelliteAntenna_dB: string,

    SatelliteReceivedPower_dB: string,

    NoiseTemperatureSatellite_K: string,

    ChannelBandwidth_MHz: string,

    UplinkNoisetoCarrierRatio_dB: string,

    DownlinkFrequency_MHz: string,

    FSPLDownlink_dB: string,

    DownlinkTotalLosses_dB: string,

    PowerSatelliteAntenna_dB: string,

    ESReceivedPower_dB: string,

    NoiseTemperatureES_K: string,

    DownlinkNoisetoCarrierRatio_dB: string,

    TotalNoisetoCarrierRatio_dB: string){
    return this.web.post('vsatlinkDesigns', {DesignNumber,
      ES_latitude,

      ES_longtitude,
  
      S_longtitude,
  
      AzimuthNW,
  
      AzimuthNE,
  
      AzimuthSW,
  
      AzimuthSE,
  
      SlantRange_km,
  
      ElevationAngle,
  
      RainRate_mm_per_h,
  
      RainRateCoefficient,
  
      RainRatePower,
  
      RainLoss_dB,
  
      UplinkFrequency_MHz,
  
      FSPLUplink_dB,
      
      ESFeederLoss_dB,
  
      AntennaMisalignmentLoss_dB,
  
      PolarizationMisalignmentLoss_dB,
  
      AtmosphericAbsorptionLoss_dB,
  
      UplinkTotalLosses_dB,
  
      PowerESAntenna_dB,
  
      GainESAntenna_dB,
  
      GainSatelliteAntenna_dB,
  
      SatelliteReceivedPower_dB,
  
      NoiseTemperatureSatellite_K,
  
      ChannelBandwidth_MHz,
  
      UplinkNoisetoCarrierRatio_dB,
  
      DownlinkFrequency_MHz,
  
      FSPLDownlink_dB,
  
      DownlinkTotalLosses_dB,
  
      PowerSatelliteAntenna_dB,
  
      ESReceivedPower_dB,
  
      NoiseTemperatureES_K,
  
      DownlinkNoisetoCarrierRatio_dB,
  
      TotalNoisetoCarrierRatio_dB});
  }
  getVsatdesign(){
    return this.web.get('vsatlinkDesigns')
  }

  getVsatdesignUpdateListener(){
    return this.vsatdesignsUpdated.asObservable();
  }
}