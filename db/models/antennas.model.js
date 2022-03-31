const mongoose = require('mongoose');

const antennasSchema = new mongoose.Schema({
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

    TransmitGain_dBi:{
        type: Number,
        required: true,
      
    },

    ReceiveGain_dBi:{
        type: Number,
        required: true,
      
    },

     FigureofMerit_dBi_per_K:{
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

module.exports = mongoose.model("Antenna", antennasSchema); 