export interface Hamdesign{

DesignNumber: number,

TransmitterHeight_m: number,

ReceiverHeight_m: number,

LinkDistance_km: number,

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

GainHAMAntenna_dB: number,

SatelliteReceivedPower_dB: number,

NoiseTemperatureHAM_K: number,

ChannelBandwidth_MHz: number,

UplinkNoisetoCarrierRatio_dB: number,

DownlinkFrequency_MHz: number,

FSPLDownlink_dB: number,

DownlinkTotalLosses_dB: number,

PowerHAMAntenna_dB: number,

ESReceivedPower_dB: number,

NoiseTemperatureES_K: number,

DownlinkNoisetoCarrierRatio_dB: number,

TotalNoisetoCarrierRatio_dB: number,

}