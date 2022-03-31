export interface Vsatdesign{

    DesignNumber: number,
    
    ES_latitude: number,

    ES_longtitude: number,

    S_longtitude: number,

    AzimuthNW: number,

    AzimuthNE: number,

    AzimuthSW: number,

    AzimuthSE: number,

    SlantRange_km: number,

    ElevationAngle: number,

    RainRate_mm_per_h: number,

    RainRateCoefficient: number,

    RainRatePower: number,

    RainLoss_dB: number,

    UplinkFrequency_MHz: number,

    FSPLUplink_dB:number,
    
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

    TotalNoisetoCarrierRatio_dB: number
}
