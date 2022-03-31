const express = require("express");

const CubesatlinkDesign = require("../models/cubesatlinkDesigns.model");

const router = new express.Router();


//Get all Cubesat link Designs
router.get('/api/cubesatlinkDesigns', (req,res,next) => {
    CubesatlinkDesign.find().then(documents => {res.send(documents)});
        
   });


//Create Cubesat link Design
router.post('/api/cubesatlinkDesigns', (req,res,next) => {

    let MinElevationAngle = req.body. MinElevationAngle;
    let ESGroundLevel_km = req.body.ESGroundLevel_km;
    let SatelliteHeight_km = req.body.SatelliteHeight_km;
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
    let GainSatelliteAntenna_dB = req.body.GainSatelliteAntenna_dB;
    let NoiseTemperatureSatellite_K = req.body.NoiseTemperatureSatellite_K;
    let ChannelBandwidth_MHz = req.body.ChannelBandwidth_MHz;
    let DownlinkFrequency_MHz = req.body.DownlinkFrequency_MHz;
    let PowerSatelliteAntenna_dB = req.body.PowerSatelliteAntenna_dB;
    let NoiseTemperatureES_K = req.body.NoiseTemperatureES_K;

    const a1 = Number(MinElevationAngle);
    const a2 = Number(ESGroundLevel_km);
    const a3 = Number(SatelliteHeight_km);
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
    const d3 = Number(GainSatelliteAntenna_dB);
    const e1 = Number(NoiseTemperatureSatellite_K);
    const e2 = Number(ChannelBandwidth_MHz);
    const f1 = Number(DownlinkFrequency_MHz);
    const g1 = Number(PowerSatelliteAntenna_dB);
    const h1 = Number(NoiseTemperatureES_K);

    let cubesatlinkDesigns = new CubesatlinkDesign({

    DesignNumber: req.body.DesignNumber,      
    MinElevationAngle: req.body.MinElevationAngle,
    ESGroundLevel_km: req.body.ESGroundLevel_km,
    SatelliteHeight_km: req.body.SatelliteHeight_km,
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
    GainSatelliteAntenna_dB: req.body.GainSatelliteAntenna_dB,
    NoiseTemperatureSatellite_K: req.body.NoiseTemperatureSatellite_K,
    ChannelBandwidth_MHz: req.body.ChannelBandwidth_MHz,
    DownlinkFrequency_MHz: req.body.DownlinkFrequency_MHz,
    PowerSatelliteAntenna_dB: req.body.PowerSatelliteAntenna_dB,
    NoiseTemperatureES_K: req.body,NoiseTemperatureES_K,

    a1: Number(MinElevationAngle),
    a2: Number(ESGroundLevel_km),
    a3: Number(SatelliteHeight_km),
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
    d3: Number(GainSatelliteAntenna_dB),
    e1: Number(NoiseTemperatureSatellite_K),
    e2: Number(ChannelBandwidth_MHz),
    f1: Number(DownlinkFrequency_MHz),
    g1: Number(PowerSatelliteAntenna_dB),
    h1: Number(NoiseTemperatureES_K),

    LongestPathtoGroundStation_km: -(6378+a2)*Math.sin(a1)+ Math.sqrt((6378+a2)*(6378+a2)*(Math.pow(Math.sin(a1),2)) + 2*6378*(a3-a2)+((a3*a3)-(a2*a2))),
    ElevationAngle: Math.asin(Math.cos(a1)*((6378+a2)/(6378+a3))) * (180/Math.PI),
    RainLoss_dB: b2*(Math.pow(b1,b3)),
    FSPLUplink_dB: 32.44 + (20*Math.log10(-(6378+a2)*Math.sin(a1)+ Math.sqrt((6378+a2)*(6378+a2)*(Math.pow(Math.sin(a1),2)) + 2*6378*(a3-a2)+((a3*a3)-(a2*a2))))) + (20*Math.log10(c1)),
    UplinkTotalLosses_dB: c2+c3+c4+c5+(b2*(Math.pow(b1,b3)))+(32.44 + (20*Math.log10(-(6378+a2)*Math.sin(a1)+ Math.sqrt((6378+a2)*(6378+a2)*(Math.pow(Math.sin(a1),2)) + 2*6378*(a3-a2)+((a3*a3)-(a2*a2))))) + (20*Math.log10(c1))),
    SatelliteReceivedPower_dB: d1+d2-(c2+c3+c4+c5+(b2*(Math.pow(b1,b3)))+(32.44 + (20*Math.log10(-(6378+a2)*Math.sin(a1)+ Math.sqrt((6378+a2)*(6378+a2)*(Math.pow(Math.sin(a1),2)) + 2*6378*(a3-a2)+((a3*a3)-(a2*a2))))) + (20*Math.log10(c1)))) +d3,
    UplinkNoisetoCarrierRatio_dB: (d1+d2-(c2+c3+c4+c5+(b2*(Math.pow(b1,b3)))+(32.44 + (20*Math.log10(-(6378+a2)*Math.sin(a1)+ Math.sqrt((6378+a2)*(6378+a2)*(Math.pow(Math.sin(a1),2)) + 2*6378*(a3-a2)+((a3*a3)-(a2*a2))))) + (20*Math.log10(c1)))) +d3) + d3 - (10*Math.log10(1.38*Math.exp(-23))) - (10*Math.log10(e1)) - (10*Math.log10(e2)),
    FSPLDownlink_dB: 32.44 + (20*Math.log10(-(6378+a2)*Math.sin(a1)+ Math.sqrt((6378+a2)*(6378+a2)*(Math.pow(Math.sin(a1),2)) + 2*6378*(a3-a2)+((a3*a3)-(a2*a2))))) + (20*Math.log10(f1)),
    DownlinkTotalLosses_dB: c2+c3+c4+c5+(b2*(Math.pow(b1,b3)))+(32.44 + (20*Math.log10(-(6378+a2)*Math.sin(a1)+ Math.sqrt((6378+a2)*(6378+a2)*(Math.pow(Math.sin(a1),2)) + 2*6378*(a3-a2)+((a3*a3)-(a2*a2))))) + (20*Math.log10(f1))),
    ESReceivedPower_dB: g1 + d3 - (c2+c3+c4+c5+(b2*(Math.pow(b1,b3)))+(32.44 + (20*Math.log10(-(6378+a2)*Math.sin(a1)+ Math.sqrt((6378+a2)*(6378+a2)*(Math.pow(Math.sin(a1),2)) + 2*6378*(a3-a2)+((a3*a3)-(a2*a2))))) + (20*Math.log10(f1)))) + d2,
    DownlinkNoisetoCarrierRatio_dB: (g1 + d3 - (c2+c3+c4+c5+(b2*(Math.pow(b1,b3)))+(32.44 + (20*Math.log10(-(6378+a2)*Math.sin(a1)+ Math.sqrt((6378+a2)*(6378+a2)*(Math.pow(Math.sin(a1),2)) + 2*6378*(a3-a2)+((a3*a3)-(a2*a2))))) + (20*Math.log10(f1)))) + d2) -(10*Math.log10(1.38*Math.exp(-23))) - (10*Math.log10(h1)) - (10*Math.log10(e2)),
    TotalNoisetoCarrierRatio_dB: 10*Math.log10(1/((1/(d1+d2-(c2+c3+c4+c5+(b2*(Math.pow(b1,b3)))+(32.44 + (20*Math.log10(-(6378+a2)*Math.sin(a1)+ Math.sqrt((6378+a2)*(6378+a2)*(Math.pow(Math.sin(a1),2)) + 2*6378*(a3-a2)+((a3*a3)-(a2*a2))))) + (20*Math.log10(c1)))) +d3) + d3 - (10*Math.log10(1.38*Math.exp(-23))) - (10*Math.log10(e1)) - (10*Math.log10(e2)) + (1/(g1 + d3 - (c2+c3+c4+c5+(b2*(Math.pow(b1,b3)))+(32.44 + (20*Math.log10(-(6378+a2)*Math.sin(a1)+ Math.sqrt((6378+a2)*(6378+a2)*(Math.pow(Math.sin(a1),2)) + 2*6378*(a3-a2)+((a3*a3)-(a2*a2))))) + (20*Math.log10(f1)))) + d2) -(10*Math.log10(1.38*Math.exp(-23))) - (10*Math.log10(h1)) - (10*Math.log10(e2)))))),


    });
    cubesatlinkDesigns.save().then((createdCubesatlinkDesign) => {
        res.send(createdCubesatlinkDesign);
        

        });
    });

module.exports = router;