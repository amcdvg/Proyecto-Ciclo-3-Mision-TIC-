const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let emprendedorSchema = new Schema({
    name: {
        type: String,
        },
    
        last_name: {
            type: String,
            },
        
        cc: {
            type: Number,
            },
    
    
        email: {
        type: String,
        },
    
        password: {
            type: String,
        },
    
        address: {
            type:String,
        },
    
        phone: {
        type: Number,
        },
    
},
{
    collection: "emprendedores",
}
);
module.exports = mongoose.model("Emprendedor", emprendedorSchema);
