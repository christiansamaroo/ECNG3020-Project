// Reference- David Akim(2022)

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hamdesign } from '../hamdesigns.model';
import { HamdesignService } from '../hamdesigns.service';


@Component({
  selector: 'app-hamdesigns',
  templateUrl: './hamdesigns.component.html',
  styleUrls: ['./hamdesigns.component.css']
})
export class HamdesignsComponent implements OnInit {

  constructor(public HamdesignService: HamdesignService) { }
  private hamdesignSub: Subscription;
  hamdesigns: Hamdesign[]=[];
  onAdd( DesignNumber: string,

    TransmitterHeight_m: string,
    
    ReceiverHeight_m: string,
    
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
    
    GainHAMAntenna_dB: string,
    
    SatelliteReceivedPower_dB: string,
    
    NoiseTemperatureHAM_K: string,
    
    ChannelBandwidth_MHz: string,
    
    UplinkNoisetoCarrierRatio_dB: string,
    
    DownlinkFrequency_MHz: string,
    
    FSPLDownlink_dB: string,
    
    DownlinkTotalLosses_dB: string,
    
    PowerHAMAntenna_dB: string,
    
    ESReceivedPower_dB: string,
    
    NoiseTemperatureES_K: string,
    
    DownlinkNoisetoCarrierRatio_dB: string,
    
    TotalNoisetoCarrierRatio_dB: string){
    this.HamdesignService.addHamdesign(DesignNumber,

      TransmitterHeight_m,
      
      ReceiverHeight_m,
      
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
      
      GainHAMAntenna_dB,
      
      SatelliteReceivedPower_dB,
      
      NoiseTemperatureHAM_K,
      
      ChannelBandwidth_MHz,
      
      UplinkNoisetoCarrierRatio_dB,
      
      DownlinkFrequency_MHz,
      
      FSPLDownlink_dB,
      
      DownlinkTotalLosses_dB,
      
      PowerHAMAntenna_dB,
      
      ESReceivedPower_dB,
      
      NoiseTemperatureES_K,
      
      DownlinkNoisetoCarrierRatio_dB,
      
      TotalNoisetoCarrierRatio_dB)
    .subscribe((std:any)=>{console.log(std)})

  }

  ngOnInit(): void {

    this.hamdesignSub = this.HamdesignService.getHamdesign()
    .subscribe((hamdesign: Hamdesign[])=> {
    
    this.hamdesigns = hamdesign;
  });
  }

}


