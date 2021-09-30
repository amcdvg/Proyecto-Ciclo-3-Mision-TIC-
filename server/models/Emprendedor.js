const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require("bcrypt-nodejs");
let emprendedorSchema = new Schema({
    name: {
        type: String,
    },
    apellido:{
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    ciudad:{
        type: String,
    },
    phone: {
        type: String,
    },
    emprendimientoName: {
        type: String,
    },
    emprendimientoDireccion: {
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
    emprendimientoRedesSocial: {
        type: String,
    },
    emprendimientoDescription: {
        type: String,
    },
    emprendimientoCategoria: {
        type: String,
    },
    emprendimientoTags: {
        type: String,
    },
},
{
    collection: "emprendedores",
}
);
emprendedorSchema.pre("save", function(next) {
    var user = this;
    if (this.isModified("password") || this.isNew) {
      bcrypt.genSalt(10, function(err, salt) {
        if (err) {
          return next(err);
        }
        bcrypt.hash(user.password, salt, null, function(err, hash) {
          if (err) {
            return next(err);
          }
          user.password = hash;
          next();
        });
      });
    } else {
      return next();
    }
  });
emprendedorSchema.methods.comparePassword = function(passw, cb) {
    bcrypt.compare(passw, this.password, function(err, isMatch) {
      if (err) {
        return cb(err);
      }
      cb(null, isMatch);
    });
  };
module.exports = mongoose.model("Emprendedor", emprendedorSchema);
