const mongoose = require('mongoose');

const standardsSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    Technology:{
        type: String,
        required: true,
        minlength:1,
        trim: true
       
    },

    MaxOperatingFrequency_GHz:{
        type: Number,
        required: true,

    },

    MinOperatingFrequency_GHz:{
        type: Number,
        required: true,
    
    },

    Bandwidth_MHz:{
        type: Number,
        required: true,
    
    },

    PowerAntenna_dBW:{
        type: Number,
        required: true,
    
    },

    RainRate_mm_per_h:{
        type: Number,
        required: true,
    
    },

    url:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    
})

module.exports = mongoose.model("Standard", standardsSchema); 