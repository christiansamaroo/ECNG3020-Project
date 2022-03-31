const express = require("express");

const BalloonsatlinkDesign = require("../models/balloonsatlinkDesigns.model");

const router = new express.Router();


//Get all Balloonsat link Designs
router.get('/api/balloonsatlinkDesigns', (req,res,next) => {
    BalloonsatlinkDesign.find().then(documents => {res.send(documents)});
        
   });


//Create Balloonsat link Design
router.post('/api/balloonsatlinkDesigns', (req,res,next) => {

    let FocalLength_mm = req.body.FocalLength_mm;
    let SensorSize_mm = req.body.SensorSize_mm;
    let PayloadHeight_m = req.body.PayloadHeight_m;
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
    let GainPayloadAntenna_dB = req.body.GainPayloadAntenna_dB;
    let NoiseTemperaturePayload_K = req.body.NoiseTemperaturePayload_K;
    let ChannelBandwidth_MHz = req.body.ChannelBandwidth_MHz;
    let DownlinkFrequency_MHz = req.body.DownlinkFrequency_MHz;
    let PowerPayloadAntenna_dB = req.body.PowerPayloadAntenna_dB;
    let NoiseTemperatureES_K = req.body.NoiseTemperatureES_K;

    const a1 = Number(FocalLength_mm);
    const a2 = Number(SensorSize_mm);
    const a3 = Number(PayloadHeight_m);
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
    const d3 = Number(GainPayloadAntenna_dB);
    const e1 = Number(NoiseTemperaturePayload_K);
    const e2 = Number(ChannelBandwidth_MHz);
    const f1 = Number(DownlinkFrequency_MHz);
    const g1 = Number(PowerPayloadAntenna_dB);
    const h1 = Number(NoiseTemperatureES_K);

    let balloonsatlinkDesigns = new BalloonsatlinkDesign({
    
    DesignNumber:req.body.DesignNumber,
    FocalLength_mm: req.body.FocalLength_mm,
    SensorSize_mm: req.body.SensorSize_mm,
    PayloadHeight_m: req.body.PayloadHeight_m,
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
    GainPayloadAntenna_dB: req.body.GainPayloadAntenna_dB,
    NoiseTemperaturePayload_K: req.body.NoiseTemperaturePayload_K,
    ChannelBandwidth_MHz: req.body.ChannelBandwidth_MHz,
    DownlinkFrequency_MHz: req.body.DownlinkFrequency_MHz,
    PowerPayloadAntenna_dB: req.body.PowerPayloadAntenna_dB,
    NoiseTemperatureES_K: req.body,NoiseTemperatureES_K,

    a1: Number(FocalLength_mm),
    a2: Number(SensorSize_mm),
    a3: Number(PayloadHeight_m),
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
    d3: Number(GainPayloadAntenna_dB),
    e1: Number(NoiseTemperaturePayload_K),
    e2: Number(ChannelBandwidth_MHz),
    f1: Number(DownlinkFrequency_MHz),
    g1: Number(PowerPayloadAntenna_dB),
    h1: Number(NoiseTemperatureES_K),

    AngularFieldofView: 2*(Math.atan(a2/(2*a1))*(180/Math.PI)) ,
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
    balloonsatlinkDesigns.save().then((createdBalloonsatlinkDesign) => {
        res.send(createdBalloonsatlinkDesign);
        

        });
    });

module.exports = router;