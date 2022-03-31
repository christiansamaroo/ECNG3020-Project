const mongoose = require('mongoose');

const vsatlinkDesignsSchema = new mongoose.Schema({

    DesignNumber: {
        type: Number,
        required: true
    },

    ES_latitude: {
        type: Number,
        required: true
    },

    ES_longtitude: {
        type: Number,
        required: true
    },

    S_longtitude: {
        type: Number,
        required: true
    },

    AzimuthNW: {
        type: Number,
        required: false,
        default: 0
        
    },

    AzimuthNE: {
        type: Number,
        required: false,
        default: 0
    },

    AzimuthSW: {
        type: Number,
        required: false,
        default: 0
    },

    AzimuthSE: {
        type: Number,
        required: false,
        default: 0
    },

     SlantRange_km: {
        type: Number,
        required: false,
        default: 0
    },

    ElevationAngle: {
        type: Number,
        required: false,
        default: 0
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

    FSPLUplink_dB:{
            type: Number,
            required: false,
        default: 0
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

    GainSatelliteAntenna_dB: {
        type: Number,
        required: true
    },

    SatelliteReceivedPower_dB: {
        type: Number,
        required: false,
        default: 0
    },

    NoiseTemperatureSatellite_K: {
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

    
    FSPLDownlink_dB: {
        type: Number,
        required: false,
        default: 0
    },

    DownlinkTotalLosses_dB: {
        type: Number,
        required: false,
        default: 0
    },

    PowerSatelliteAntenna_dB: {
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

module.exports = mongoose.model("VsatlinkDesign", vsatlinkDesignsSchema); 