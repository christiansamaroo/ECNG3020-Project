const express = require("express");

const UavlinkDesign = require("../models/uavlinkDesigns.model");

const router = new express.Router();


//Get all UAV link Designs
router.get('/api/uavlinkDesigns', (req,res,next) => {
    UavlinkDesign.find().then(documents => {res.send(documents)});
        
   });


//Create UAV link Design
router.post('/api/uavlinkDesigns', (req,res,next) => {
    
    let TransmitterHeight_m = req.body.TransmitterHeight_m;
    let ReceiverHeight_m = req.body.ReceiverHeight_m;
    let TransmittertoReceiverDistance_km = req.body.TransmittertoReceiverDistance_km;
    let CorrectiveCoefficient = req.body.CorrectiveCoefficient;
    let ConstantNumber_dB = req.body.ConstantNumber_dB;
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
    let GainUAVAntenna_dB = req.body.GainUAVAntenna_dB;
    let NoiseTemperatureUAVAntenna_K = req.body.NoiseTemperatureUAVAntenna_K;
    let ChannelBandwidth_MHz = req.body.ChannelBandwidth_MHz;
    let DownlinkFrequency_MHz = req.body.DownlinkFrequency_MHz;
    let PowerUAVAntenna_dB = req.body.PowerUAVAntenna_dB;
    let NoiseTemperatureES_K = req.body.NoiseTemperatureES_K;

    const a1 = Number(TransmitterHeight_m);
    const a2 = Number(ReceiverHeight_m);
    const a3 = Number(TransmittertoReceiverDistance_km);
    const a4 = Number(CorrectiveCoefficient);
    const a5 = Number(ConstantNumber_dB);
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
    const d3 = Number(GainUAVAntenna_dB);
    const e1 = Number(NoiseTemperatureUAVAntenna_K);
    const e2 = Number(ChannelBandwidth_MHz);
    const f1 = Number(DownlinkFrequency_MHz);
    const g1 = Number(PowerUAVAntenna_dB);
    const h1 = Number(NoiseTemperatureES_K);

    let uavlinkDesigns = new UavlinkDesign({
         
    DesignNumber: req.body.DesignNumber,
    TransmitterHeight_m: req.body.TransmitterHeight_m,
    ReceiverHeight_m: req.body.ReceiverHeight_m,
    TransmittertoReceiverDistance_km: req.body.TransmittertoReceiverDistance_km,
    CorrectiveCoefficient: req.body.CorrectiveCoefficient,
    ConstantNumber_dB: req.body.ConstantNumber_dB,
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
    GainUAVAntenna_dB: req.body.GainUAVAntenna_dB,
    NoiseTemperatureUAVAntenna_K: req.body.NoiseTemperatureUAVAntenna_K,
    ChannelBandwidth_MHz: req.body.ChannelBandwidth_MHz,
    DownlinkFrequency_MHz: req.body.DownlinkFrequency_MHz,
    PowerUAVAntenna_dB: req.body.PowerUAVAntenna_dB,
    NoiseTemperatureES_K: req.body,NoiseTemperatureES_K,

    a1: Number(TransmitterHeight_m),
    a2: Number(ReceiverHeight_m),
    a3: Number(TransmittertoReceiverDistance_km),
    a4: Number(CorrectiveCoefficient),
    a5: Number(ConstantNumber_dB),
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
    d3: Number(GainUAVAntenna_dB),
    e1: Number(NoiseTemperatureUAVAntenna_K),
    e2: Number(ChannelBandwidth_MHz),
    f1: Number(DownlinkFrequency_MHz),
    g1: Number(PowerUAVAntenna_dB),
    h1: Number(NoiseTemperatureES_K),


    RainLoss_dB: b2*(Math.pow(b1,b3)),
    UplinkPLCOST_dB: 46.3+33.9*Math.log10(c1) - 13.82*Math.log10(a1) - a4 + (44.9-(6.55*Math.log10(a1)))*Math.log10(a3) +a5,
    UplinkTotalLosses_dB: c2+c3+c4+c5+(b2*(Math.pow(b1,b3)))+(46.3+33.9*Math.log10(c1) - 13.82*Math.log10(a1) - a4 + (44.9-(6.55*Math.log10(a1)))*Math.log10(a3) +a5),
    SatelliteReceivedPower_dB: d1+d2-(c2+c3+c4+c5+(b2*(Math.pow(b1,b3)))+(46.3+33.9*Math.log10(c1) - 13.82*Math.log10(a1) - a4 + (44.9-(6.55*Math.log10(a1)))*Math.log10(a3) +a5)) +d3,
    UplinkNoisetoCarrierRatio_dB: (d1+d2-(c2+c3+c4+c5+(b2*(Math.pow(b1,b3)))+(46.3+33.9*Math.log10(c1) - 13.82*Math.log10(a1) - a4 + (44.9-(6.55*Math.log10(a1)))*Math.log10(a3) +a5)) +d3) + d3 - (10*Math.log10(1.38*Math.exp(-23))) - (10*Math.log10(e1)) - (10*Math.log10(e2)),
    DownlinkPLCOST_dB: 46.3+33.9*Math.log10(f1) - 13.82*Math.log10(a1) - a4 + (44.9-(6.55*Math.log10(a1)))*Math.log10(a3) +a5,
    DownlinkTotalLosses_dB: c2+c3+c4+c5+(b2*(Math.pow(b1,b3)))+(46.3+33.9*Math.log10(f1) - 13.82*Math.log10(a1) - a4 + (44.9-(6.55*Math.log10(a1)))*Math.log10(a3) +a5),
    ESReceivedPower_dB: g1 + d3 - (c2+c3+c4+c5+(b2*(Math.pow(b1,b3)))+(46.3+33.9*Math.log10(f1) - 13.82*Math.log10(a1) - a4 + (44.9-(6.55*Math.log10(a1)))*Math.log10(a3) +a5)) + d2,
    DownlinkNoisetoCarrierRatio_dB: (g1 + d3 - (c2+c3+c4+c5+(b2*(Math.pow(b1,b3)))+(46.3+33.9*Math.log10(f1) - 13.82*Math.log10(a1) - a4 + (44.9-(6.55*Math.log10(a1)))*Math.log10(a3) +a5)) + d2) -(10*Math.log10(1.38*Math.exp(-23))) - (10*Math.log10(h1)) - (10*Math.log10(e2)),
    TotalNoisetoCarrierRatio_dB: 10*Math.log10(1/((1/(d1+d2-(c2+c3+c4+c5+(b2*(Math.pow(b1,b3)))+(46.3+33.9*Math.log10(c1) - 13.82*Math.log10(a1) - a4 + (44.9-(6.55*Math.log10(a1)))*Math.log10(a3) +a5)) +d3) + d3 - (10*Math.log10(1.38*Math.exp(-23))) - (10*Math.log10(e1)) - (10*Math.log10(e2)) + (1/(g1 + d3 - (c2+c3+c4+c5+(b2*(Math.pow(b1,b3)))+(46.3+33.9*Math.log10(f1) - 13.82*Math.log10(a1) - a4 + (44.9-(6.55*Math.log10(a1)))*Math.log10(a3) +a5)) + d2) -(10*Math.log10(1.38*Math.exp(-23))) - (10*Math.log10(h1)) - (10*Math.log10(e2)))))),


    });
    uavlinkDesigns.save().then((createdUavlinkDesign) => {
        res.send(createdUavlinkDesign);
        

        });
    });

module.exports = router;