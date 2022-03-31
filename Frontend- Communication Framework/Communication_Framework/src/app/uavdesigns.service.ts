// Reference- David Akim(2022)

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Uavdesign } from './uavdesigns.model';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class UavdesignService {
  private uavdesigns:Uavdesign[]=[];
  private uavdesignsUpdated = new Subject<Uavdesign[]>();

  constructor(private web:WebService) { }

  addUavdesign(DesignNumber: string,
    
    TransmitterHeight_m: string,

    ReceiverHeight_m: string,

    TransmittertoReceiverDistance_km: string,

    CorrectiveCoefficient: string,

    ConstantNumber_dB: string,

    RainRate_mm_per_h: string,

    RainRateCoefficient: string,

    RainRatePower: string,

    RainLoss_dB: string,

    UplinkFrequency_MHz: string,

    UplinkPLCOST_dB: string,
    
    ESFeederLoss_dB: string,

    AntennaMisalignmentLoss_dB: string,

    PolarizationMisalignmentLoss_dB: string,

    AtmosphericAbsorptionLoss_dB: string,

    UplinkTotalLosses_dB: string,

    PowerESAntenna_dB: string,

    GainESAntenna_dB: string,

    GainUAVAntenna_dB: string,

    SatelliteReceivedPower_dB: string,

    NoiseTemperatureUAVAntenna_K: string,

    ChannelBandwidth_MHz: string,

    UplinkNoisetoCarrierRatio_dB: string,

    DownlinkFrequency_MHz: string,

    DownlinkPLCOST_dB: string,

    DownlinkTotalLosses_dB: string,

    PowerUAVAntenna_dB: string,

    ESReceivedPower_dB: string,

    NoiseTemperatureES_K: string,

    DownlinkNoisetoCarrierRatio_dB: string,

    TotalNoisetoCarrierRatio_dB: string){
    return this.web.post('uavlinkDesigns', {DesignNumber,
    
      TransmitterHeight_m,
  
      ReceiverHeight_m,
  
      TransmittertoReceiverDistance_km,
  
      CorrectiveCoefficient,
  
      ConstantNumber_dB,
  
      RainRate_mm_per_h,
  
      RainRateCoefficient,
  
      RainRatePower,
  
      RainLoss_dB,
  
      UplinkFrequency_MHz,
  
      UplinkPLCOST_dB,
      
      ESFeederLoss_dB,
  
      AntennaMisalignmentLoss_dB,
  
      PolarizationMisalignmentLoss_dB,
  
      AtmosphericAbsorptionLoss_dB,
  
      UplinkTotalLosses_dB,
  
      PowerESAntenna_dB,
  
      GainESAntenna_dB,
  
      GainUAVAntenna_dB,
  
      SatelliteReceivedPower_dB,
  
      NoiseTemperatureUAVAntenna_K,
  
      ChannelBandwidth_MHz,
  
      UplinkNoisetoCarrierRatio_dB,
  
      DownlinkFrequency_MHz,
  
      DownlinkPLCOST_dB,
  
      DownlinkTotalLosses_dB,
  
      PowerUAVAntenna_dB,
  
      ESReceivedPower_dB,
  
      NoiseTemperatureES_K,
  
      DownlinkNoisetoCarrierRatio_dB,
  
      TotalNoisetoCarrierRatio_dB});
  }
  getUavdesign(){
    return this.web.get('uavlinkDesigns')
  }

  getUavdesignUpdateListener(){
    return this.uavdesignsUpdated.asObservable();
  }
}
