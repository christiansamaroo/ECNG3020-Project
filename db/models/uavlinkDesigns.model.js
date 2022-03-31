const mongoose = require('mongoose');

const uavlinkDesignsSchema = new mongoose.Schema({

    DesignNumber: {
        type: Number,
        required: true
    },
    
    TransmitterHeight_m: {
        type: Number,
        required: true
    },

    ReceiverHeight_m: {
        type: Number,
        required: true
    },

    TransmittertoReceiverDistance_km: {
        type: Number,
        required: true
    },

    CorrectiveCoefficient: {
        type: Number,
        required: true
    },

    ConstantNumber_dB: {
        type: Number,
        required: true
    },

    RainRate_mm_per_h: {
        type: Number,
        required: true
    },

    RainRateCoefficient: {
        type: Number,
        required: true
    },

    RainRatePower: {
        type: Number,
        required: true
    },

    RainLoss_dB: {
        type: Number,
        required: false,
        default: 0
    },

    UplinkFrequency_MHz: {
        type: Number,
        required: true
    },

    UplinkPLCOST_dB: {
        type: Number,
        required: false,
        default: 0,
    },
    
    ESFeederLoss_dB: {
        type: Number,
        required: true
    },

    AntennaMisalignmentLoss_dB: {
        type: Number,
        required: true
    },

    PolarizationMisalignmentLoss_dB: {
        type: Number,
        required: true
    },

    AtmosphericAbsorptionLoss_dB: {
        type: Number,
        required: true
    },

    UplinkTotalLosses_dB: {
        type: Number,
        required: false,
        default: 0
    },

    PowerESAntenna_dB: {
        type: Number,
        required: true
    },

    GainESAntenna_dB: {
        type: Number,
        required: true
    },

    GainUAVAntenna_dB: {
        type: Number,
        required: true
    },

    SatelliteReceivedPower_dB: {
        type: Number,
        required: false,
        default: 0
    },

    NoiseTemperatureUAVAntenna_K: {
        type: Number,
        required: true
    },

    ChannelBandwidth_MHz: {
        type: Number,
        required: true
    },

    UplinkNoisetoCarrierRatio_dB: {
        type: Number,
        required: false,
        default: 0
    },

    DownlinkFrequency_MHz: {
        type: Number,
        required: true
    },

    
    DownlinkPLCOST_dB: {
        type: Number,
        required: false,
        default: 0,
    },

    DownlinkTotalLosses_dB: {
        type: Number,
        required: false,
        default: 0
    },

    PowerUAVAntenna_dB: {
        type: Number,
        required: true
    },

    ESReceivedPower_dB: {
        type: Number,
        required: false,
        default: 0
    },

    NoiseTemperatureES_K: {
        type: Number,
        required: true
    },

    DownlinkNoisetoCarrierRatio_dB: {
        type: Number,
        required: false,
        default: 0
    },

    TotalNoisetoCarrierRatio_dB: {
        type: Number,
        required: false,
        default: 0
    },
    
    
})

module.exports = mongoose.model("UavlinkDesign", uavlinkDesignsSchema); 