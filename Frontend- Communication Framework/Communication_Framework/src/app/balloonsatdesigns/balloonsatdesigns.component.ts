// Reference- David Akim(2022)

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Balloonsatdesign } from '../balloonsatdesigns.model';
import { BalloonsatdesignService } from '../balloonsatdesigns.service';


@Component({
  selector: 'app-balloonsatdesigns',
  templateUrl: './balloonsatdesigns.component.html',
  styleUrls: ['./balloonsatdesigns.component.css']
})
export class BalloonsatdesignsComponent implements OnInit {

  constructor(public BalloonsatdesignService: BalloonsatdesignService) { }
  private balloonsatdesignSub: Subscription;
  balloonsatdesigns: Balloonsatdesign[]=[];
  onAdd(DesignNumber: string,

    FocalLength_mm: string,
    
    SensorSize_mm: string,
    
    AngularFieldofView: string,
    
    PayloadHeight_m: string,
    
    LinkDistance_km: string,
    
    RainRate_mm_per_h: string,
    
    RainRateCoefficient: string,
    
    RainRatePower: string,
    
    RainLoss_dB: string,
    
    UplinkFrequency_MHz: string,
    
    FSPLUplink_dB: string,
    
    ESFeederLoss_dB: string,
    
    AntennaMisalignmentLoss_dB: string,
    
    PolarizationMisalignmentLoss_dB: string,
    
    AtmosphericAbsorptionLoss_dB: string,
    
    UplinkTotalLosses_dB: string,
    
    PowerESAntenna_dB: string,
    
    GainESAntenna_dB: string,
    
    GainPayloadAntenna_dB: string,
    
    SatelliteReceivedPower_dB: string,
    
    NoiseTemperaturePayload_K: string,
    
    ChannelBandwidth_MHz: string,
    
    UplinkNoisetoCarrierRatio_dB: string,
    
    DownlinkFrequency_MHz: string,
    
    FSPLDownlink_dB: string,
    
    DownlinkTotalLosses_dB: string,
    
    PowerPayloadAntenna_dB: string,
    
    ESReceivedPower_dB: string,
    
    NoiseTemperatureES_K: string,
    
    DownlinkNoisetoCarrierRatio_dB: string,
    
    TotalNoisetoCarrierRatio_dB: string){
    this.BalloonsatdesignService.addBalloonsatdesign(DesignNumber,

      FocalLength_mm,
      
      SensorSize_mm,
      
      AngularFieldofView,
      
      PayloadHeight_m,
      
      LinkDistance_km,
      
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
      
      GainPayloadAntenna_dB,
      
      SatelliteReceivedPower_dB,
      
      NoiseTemperaturePayload_K,
      
      ChannelBandwidth_MHz,
      
      UplinkNoisetoCarrierRatio_dB,
      
      DownlinkFrequency_MHz,
      
      FSPLDownlink_dB,
      
      DownlinkTotalLosses_dB,
      
      PowerPayloadAntenna_dB,
      
      ESReceivedPower_dB,
      
      NoiseTemperatureES_K,
      
      DownlinkNoisetoCarrierRatio_dB,
      
      TotalNoisetoCarrierRatio_dB)
    .subscribe((std:any)=>{console.log(std)})

  }

  ngOnInit(): void {

    this.balloonsatdesignSub = this.BalloonsatdesignService.getBalloonsatdesign()
    .subscribe((balloonsatdesign: Balloonsatdesign[])=> {
    
    this.balloonsatdesigns = balloonsatdesign;
  });
  }

}

