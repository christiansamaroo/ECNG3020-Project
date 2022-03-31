const express = require("express");

const HamlinkDesign = require("../models/hamlinkDesigns.model");

const router = new express.Router();


//Get all HAM link Designs
router.get('/api/hamlinkDesigns', (req,res,next) => {
    HamlinkDesign.find().then(documents => {res.send(documents)});
        
   });


//Create HAM link Design
router.post('/api/hamlinkDesigns', (req,res,next) => {

    let TransmitterHeight_m = req.body.TransmitterHeight_m;
    let ReceiverHeight_m = req.body.ReceiverHeight_m;
    let LinkDistance_km = req.body.LinkDistance_km;
    let RainRate_mm_per_h = req.body.RainRate_mm_per_h;
    let RainRateCoefficient = req.body.RainRateCoefficient;
    let RainRatePower =  req.body.RainRatePower;
    let UplinkFrequency_MHz = req.body.UplinkFrequency_MHz;
    let ESFeederLoss_dB = req.body.ESFeederLoss_dB;
    let AntennaMisalignmentLoss_dB = req.body.AntennaMisalignmentLoss_dB;
    let PolarizationMisalignmentLoss_dB = req.body.PolarizationMisalignmentLoss_dB;
    let AtmosphericAbsorptionLoss_dB = req.body.AtmosphericAbsorptionLoss_dB;
    let PowerESAntenna_dB = req.body.PowerESAntenna_dB;
    let GainESAntenna_dB = req.body.GainESAntenna_dB;
    let GainHAMAntenna_dB = req.body.GainHAMAntenna_dB;
    let NoiseTemperatureHAM_K = req.body.NoiseTemperatureHAM_K;
    let ChannelBandwidth_MHz = req.body.ChannelBandwidth_MHz;
    let DownlinkFrequency_MHz = req.body.DownlinkFrequency_MHz;
    let PowerHAMAntenna_dB = req.body.PowerHAMAntenna_dB;
    let NoiseTemperatureES_K = req.body.NoiseTemperatureES_K;

    const a1 = Number(TransmitterHeight_m);
    const a2 = Number(ReceiverHeight_m);
    const a4 = Number(LinkDistance_km);
    const b1 = Number(RainRate_mm_per_h);
    const b2 = Number(RainRateCoefficient);
    const b3 = Number(RainRatePower);
    const c1 = Number(UplinkFrequency_MHz);
    const c2 = Number(ESFeederLoss_dB);
    const c3 = Number(AntennaMisalignmentLoss_dB);
    const c4 = Number(PolarizationMisalignmentLoss_dB);
    const c5 = Number(AtmosphericAbsorptionLoss_dB);
    const d1 = Number(PowerESAntenna_dB);
    const d2 = Number(GainESAntenna_dB);
    const d3 = Number(GainHAMAntenna_dB);
    const e1 = Number(NoiseTemperatureHAM_K);
    const e2 = Number(ChannelBandwidth_MHz);
    const f1 = Number(DownlinkFrequency_MHz);
    const g1 = Number(PowerHAMAntenna_dB);
    const h1 = Number(NoiseTemperatureES_K);

    let hamlinkDesigns = new HamlinkDesign({

    DesignNumber: req.body.DesignNumber,
    TransmitterHeight_m: req.body.TransmitterHeight_m,
    ReceiverHeight_m: req.body.ReceiverHeight_m,
    LinkDistance_km: req.body.LinkDistance_km,
    RainRate_mm_per_h: req.body.RainRate_mm_per_h,
    RainRateCoefficient: req.body.RainRateCoefficient,
    RainRatePower: req.body.RainRatePower,
    UplinkFrequency_MHz: req.body.UplinkFrequency_MHz,
    ESFeederLoss_dB: req.body.ESFeederLoss_dB,
    AntennaMisalignmentLoss_dB: req.body.AntennaMisalignmentLoss_dB,
    PolarizationMisalignmentLoss_dB: req.body.PolarizationMisalignmentLoss_dB,
    AtmosphericAbsorptionLoss_dB: req.body.AtmosphericAbsorptionLoss_dB,
    PowerESAntenna_dB: req.body.PowerESAntenna_dB,
    GainESAntenna_dB: req.body.GainESAntenna_dB,
    GainHAMAntenna_dB: req.body.GainHAMAntenna_dB,
    NoiseTemperatureHAM_K: req.body.NoiseTemperatureHAM_K,
    ChannelBandwidth_MHz: req.body.ChannelBandwidth_MHz,
    DownlinkFrequency_MHz: req.body.DownlinkFrequency_MHz,
    PowerHAMAntenna_dB: req.body.PowerHAMAntenna_dB,
    NoiseTemperatureES_K: req.body,NoiseTemperatureES_K,

    a1: Number(TransmitterHeight_m),
    a2: Number(ReceiverHeight_m),
    a4: Number(LinkDistance_km),
    b1: Number(RainRate_mm_per_h),
    b2: Number(RainRateCoefficient),
    b3: Number(RainRatePower),
    c1: Number(UplinkFrequency_MHz),
    c2: Number(ESFeederLoss_dB),
    c3: Number(AntennaMisalignmentLoss_dB),
    c4: Number(PolarizationMisalignmentLoss_dB),
    c5: Number(AtmosphericAbsorptionLoss_dB),
    d1: Number(PowerESAntenna_dB),
    d2: Number(GainESAntenna_dB),
    d3: Number(GainHAMAntenna_dB),
    e1: Number(NoiseTemperatureHAM_K),
    e2: Number(ChannelBandwidth_MHz),
    f1: Number(DownlinkFrequency_MHz),
    g1: Number(PowerHAMAntenna_dB),
    h1: Number(NoiseTemperatureES_K),

    RainLoss_dB: b2*(Math.pow(b1,b3)),
    FSPLUplink_dB: 32.44 + (20*Math.log10(a4)) + (20*Math.log10(c1)),
    UplinkTotalLosses_dB: c2+c3+c4+c5+(b2*(Math.pow(b1,b3)))+(32.44 + (20*Math.log10(a4)) + (20*Math.log10(c1))),
    SatelliteReceivedPower_dB: d1+d2-(c2+c3+c4+c5+(b2*(Math.pow(b1,b3)))+(32.44 + (20*Math.log10(a4)) + (20*Math.log10(c1)))) +d3,
    UplinkNoisetoCarrierRatio_dB: (d1+d2-(c2+c3+c4+c5+(b2*(Math.pow(b1,b3)))+(32.44 + (20*Math.log10(a4)) + (20*Math.log10(c1)))) +d3) + d3 - (10*Math.log10(1.38*Math.exp(-23))) - (10*Math.log10(e1)) - (10*Math.log10(e2)),
    FSPLDownlink_dB: 32.44 + (20*Math.log10(a4)) + (20*Math.log10(f1)),
    DownlinkTotalLosses_dB: c2+c3+c4+c5+(b2*(Math.pow(b1,b3)))+(32.44 + (20*Math.log10(a4)) + (20*Math.log10(f1))),
    ESReceivedPower_dB: g1 + d3 - (c2+c3+c4+c5+(b2*(Math.pow(b1,b3)))+(32.44 + (20*Math.log10(a4)) + (20*Math.log10(f1)))) + d2,
    DownlinkNoisetoCarrierRatio_dB: (g1 + d3 - (c2+c3+c4+c5+(b2*(Math.pow(b1,b3)))+(32.44 + (20*Math.log10(a4)) + (20*Math.log10(f1)))) + d2) -(10*Math.log10(1.38*Math.exp(-23))) - (10*Math.log10(h1)) - (10*Math.log10(e2)),
    TotalNoisetoCarrierRatio_dB: 10*Math.log10(1/((1/(d1+d2-(c2+c3+c4+c5+(b2*(Math.pow(b1,b3)))+(32.44 + (20*Math.log10(a4)) + (20*Math.log10(c1)))) +d3) + d3 - (10*Math.log10(1.38*Math.exp(-23))) - (10*Math.log10(e1)) - (10*Math.log10(e2)) + (1/(g1 + d3 - (c2+c3+c4+c5+(b2*(Math.pow(b1,b3)))+(32.44 + (20*Math.log10(a4)) + (20*Math.log10(f1)))) + d2) -(10*Math.log10(1.38*Math.exp(-23))) - (10*Math.log10(h1)) - (10*Math.log10(e2)))))),


    });
    hamlinkDesigns.save().then((createdHamlinkDesign) => {
        res.send(createdHamlinkDesign);
        

        });
    });

module.exports = router;