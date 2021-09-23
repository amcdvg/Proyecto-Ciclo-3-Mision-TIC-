const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let emprendedorSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
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
