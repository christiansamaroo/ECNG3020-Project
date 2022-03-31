export interface Cubesatdesign{

DesignNumber: number,

MinElevationAngle: number,

ESGroundLevel_km: number,

SatelliteHeight_km: number,

LongestPathtoGroundStation_km: number,
    
ElevationAngle: number,
    
RainRate_mm_per_h: number,

RainRateCoefficient: number,

RainRatePower: number,

RainLoss_dB: number, 

UplinkFrequency_MHz: number,

FSPLUplink_dB: number, 

ESFeederLoss_dB: number,
  
AntennaMisalignmentLoss_dB: number,

PolarizationMisalignmentLoss_dB: number,

AtmosphericAbsorptionLoss_dB: number,

UplinkTotalLosses_dB: number,

PowerESAntenna_dB: number,
  
GainESAntenna_dB: number,

GainSatelliteAntenna_dB: number,

SatelliteReceivedPower_dB: number,
  
NoiseTemperatureSatellite_K: number,

ChannelBandwidth_MHz: number,
    
UplinkNoisetoCarrierRatio_dB: number,
    
DownlinkFrequency_MHz: number,

FSPLDownlink_dB: number,

DownlinkTotalLosses_dB: number,
  
PowerSatelliteAntenna_dB: number,
   
ESReceivedPower_dB: number,

NoiseTemperatureES_K: number,

DownlinkNoisetoCarrierRatio_dB: number, 

TotalNoisetoCarrierRatio_dB: number,
  
}