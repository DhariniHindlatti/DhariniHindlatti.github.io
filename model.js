const mongoose = require("mongoose")

const UserDetailsSchema = new mongoose.Schema(
    {
        ref: String,  
        match:String   
    }, {
        collection:"vwcollection"
    }
) 

mongoose.model("vwcollection", UserDetailsSchema);