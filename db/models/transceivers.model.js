const mongoose = require('mongoose');

const transceiversSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    FrequencyBand:{
        type: String,
        required: true,
        minlength:1,
        trim: true
    }, 
    MaxFrequency_GHz:{
        type: Number,
        required: true,
        
    },
    MinFrequency_GHz:{
        type: Number,
        required: true,
      
    },

    OutputPower_dBm:{
        type: Number,
        required: true,
      
    },

   

     Sensitivity_dBm:{
        type: Number,
        required: true,
      
    },

    DataRate_kbps:{
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

module.exports = mongoose.model("Transceiver", transceiversSchema); 

