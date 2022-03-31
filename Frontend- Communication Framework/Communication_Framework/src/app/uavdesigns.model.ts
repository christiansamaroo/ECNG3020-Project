export interface Uavdesign{

    DesignNumber: number,
    
    TransmitterHeight_m: number,

    ReceiverHeight_m: number,

    TransmittertoReceiverDistance_km: number,

    CorrectiveCoefficient: number,

    ConstantNumber_dB: number,

    RainRate_mm_per_h: number,

    RainRateCoefficient: number,

    RainRatePower: number,

    RainLoss_dB: number,

    UplinkFrequency_MHz: number,

    UplinkPLCOST_dB: number,
    
    ESFeederLoss_dB: number,

    AntennaMisalignmentLoss_dB: number,

    PolarizationMisalignmentLoss_dB: number,

    AtmosphericAbsorptionLoss_dB: number,

    UplinkTotalLosses_dB: number,

    PowerESAntenna_dB: number,

    GainESAntenna_dB: number,

    GainUAVAntenna_dB: number,

    SatelliteReceivedPower_dB: number,

    NoiseTemperatureUAVAntenna_K: number,

    ChannelBandwidth_MHz: number,

    UplinkNoisetoCarrierRatio_dB: number,

    DownlinkFrequency_MHz: number,

    DownlinkPLCOST_dB: number,

    DownlinkTotalLosses_dB: number,

    PowerUAVAntenna_dB: number,

    ESReceivedPower_dB: number,

    NoiseTemperatureES_K: number,

    DownlinkNoisetoCarrierRatio_dB: number,

    TotalNoisetoCarrierRatio_dB: number
      
    }