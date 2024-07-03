const mongoose = require("mongoose");

const evOrderSchema = new mongoose.Schema(
  {
    userId: { 
        type: mongoose.Schema.ObjectId, 
        ref: 'users', 
        required: true 
    },
    orderId:{
        type:String,
        required:true,
    },
    userName:{
        type:String,
        required:true,
    },
    userRole: { 
        type: String,  
        required: true,
    },
    level: { 
        type: String, 
        required: true
    },
    pricePerUnit: { 
        type: Number, 
        required: true 
    },
    opCurrent: { 
        type: String, 
        required: true 
    },
    connectorType:{
        type:String,
        required:true
    },
    availabilityStart: { 
        type: Date, 
        required: true 
    },
    availabilityEnd: { 
        type: Date, 
        required: true 
    },
    location: { 
        type: String, 
        required: true 
    },
    lati:{
        type:String,

      },
      longi:{
        type:String,
      },
  },
  
  { timestamps: true }
);

module.exports = mongoose.model("EvOrder", evOrderSchema);