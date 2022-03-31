const express = require("express");

const Antenna = require("../models/antennas.model");

const router = new express.Router();


//Get all Antennas
router.get('/api/antennas', (req,res,next) => {
    Antenna.find().then(documents => {res.send(documents)});
        
   });


//Create Antennas
router.post('/api/antennas', (req,res,next) => {
    

    let antennas = new Antenna({
         Name: req.body.Name,
         FrequencyBand: req.body.FrequencyBand,
         MaxFrequency_GHz: req.body.MaxFrequency_GHz,
         MinFrequency_GHz: req.body.MinFrequency_GHz,
         TransmitGain_dBi: req.body.TransmitGain_dBi,
         ReceiveGain_dBi: req.body.ReceiveGain_dBi,
         FigureofMerit_dBi_per_K: req.body.FigureofMerit_dBi_per_K,
         url:req.body.url

    });
    antennas.save().then((createdAntenna) => {
        res.send(createdAntenna);
        

        });
    });

module.exports = router;
