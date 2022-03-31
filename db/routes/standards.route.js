const express = require("express");

const Standard = require("../models/standards.model");

const router = new express.Router();


//Get all Standards
router.get('/api/standards', (req,res,next) => {
    Standard.find().then(documents => {res.send(documents)});
        
   });


//Create Standards
router.post('/api/standards', (req,res,next) => {
    

    let standards = new Standard({
         Name: req.body.Name,
         Technology: req.body.Technology,
         MaxOperatingFrequency_GHz: req.body.MaxOperatingFrequency_GHz,
         MinOperatingFrequency_GHz: req.body.MinOperatingFrequency_GHz,
         Bandwidth_MHz: req.body.Bandwidth_MHz,
         PowerAntenna_dBW: req.body.PowerAntenna_dBW,
         RainRate_mm_per_h: req.body.RainRate_mm_per_h,
         url: req.body.url

    });
    standards.save().then((createdStandard) => {
        res.send(createdStandard);
        

        });
    });

module.exports = router;
