const express = require("express");

const Transceiver = require("../models/transceivers.model");

const router = new express.Router();

//Get all Transceivers
router.get('/api/transceivers', (req,res,next) => {
    Transceiver.find().then(documents => {res.send(documents)});
        
   });


//Create Transceivers
router.post('/api/transceivers', (req,res,next) => {
    

    let transceivers = new Transceiver({
         Name: req.body.Name,
         FrequencyBand: req.body.FrequencyBand,
         MaxFrequency_GHz: req.body.MaxFrequency_GHz,
         MinFrequency_GHz: req.body.MinFrequency_GHz,
         OutputPower_dBm: req.body.OutputPower_dBm,
         Sensitivity_dBm: req.body.Sensitivity_dBm,
         DataRate_kbps: req.body.DataRate_kbps,
         url: req.body.url

    });
    transceivers.save().then((createdTransceiver) => {
        res.send(createdTransceiver);
        

        });
    });

module.exports = router;
