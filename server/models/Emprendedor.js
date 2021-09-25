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
        type: String,
    },
    emprendimientoName: {
        type: String,
    },
    emprendimientoEmail: {
        type: String,
    },
    emprendimientoCiudad: {
        type: String,
    },
    emprendimientoPhone: {
        type: String,
    },
},
{
    collection: "emprendedores",
}
);
module.exports = mongoose.model("Emprendedor", emprendedorSchema);
