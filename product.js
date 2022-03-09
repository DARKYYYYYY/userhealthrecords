const mongoose = require('mongoose');
const productSchema= mongoose.Schema({
    UID: String,
    Date: { type: Date, default: Date.now },
    DoctorName: String,
    Diagnosis: String,
    Medicines: [{Name: String,Count: Number,Date:{ type: Date, default: Date.now },Comment: String,Acknowledgement: String}],
   Tests : [{Name: String,Count: Number,Comment: String,Acknowledgement: String}]    
} );
module.exports= mongoose.model("userdetail",productSchema);