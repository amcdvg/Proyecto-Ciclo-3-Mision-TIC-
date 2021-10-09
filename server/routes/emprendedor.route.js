const express = require("express");
var mongoose = require("mongoose");
var passport = require("passport");
var settings = require("../config/settings");
require("../config/passport")(passport);
var jwt = require("jsonwebtoken");

const emprendedorRoute = express.Router();
// Emprendedor model
let EmprendedorModel = require("../models/Emprendedor");

emprendedorRoute.route("/listar").get((req, res) => {
    EmprendedorModel.find((error, data1, next) => {
        if (error) {
            return next(error);
        } else {
            res.json(data1);
        }
    });
});
emprendedorRoute.route("/listar5").get((req, res) => {
  EmprendedorModel.find((error, data1, next) => {
      if (error) {
          return next(error);
      } else {
          res.json(data1);
      }
  }).limit(6).sort({$natural:-1});
});
emprendedorRoute.route("/registro-emprendedor").post(function(req, res) {
    if (!req.body.email || !req.body.password) {
      res.json({ success: false, msg: "Por favor Ingrese Usuario y Contraseña" });
    } else {
      let newEmprendedorModel = new EmprendedorModel({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        apellido: req.body.apellido,
        ciudad: req.body.ciudad,
        phone: req.body.phone,
      });
      newEmprendedorModel.save(function(err) {
        if (err) {
          return res.json({ success: false, msg: "E-mail already exists." });
          }
          console.log("Usuario Creado con Exito");
      });
    }
  });

emprendedorRoute.get("/buscar-emprendedor/:id", function(
  req,
  res
) {
    EmprendedorModel.findById(req.params.id, (error, data, next) => {
      if (error) {
            console.log(error);
            return next(error);
        } else {
            res.json(data);
        }
      });
      
});

emprendedorRoute.get("/buscar-emprendedor1/:id", function(
  req,
  res
) {
    EmprendedorModel.findByToken(token)
    .then(user => {
     if (user) {
      console.log(user._id),
      console.log(user.email);
      return done(null, {
       id: user.id,
       email: user.email,
      });
     }
     return done(null, false);
    })
    .catch(error => done(error, null));
      
});



// Update student
emprendedorRoute.route("/editar-emprendedor/:id").put((req, res, next) => {
    EmprendedorModel.findByIdAndUpdate(
        req.params.id,
        {
        $set: req.body,
        },
        (error, data) => {
        if (error) {
            console.log(error);
            return next(error);
        } else {
            res.json(data);
            console.log("Emprendedor actualizado!");
        }
    });
});
// Update student
emprendedorRoute.route("/editar-password/:id").post((req, res, next) => {
  EmprendedorModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
        },
      (error, data) => {
      if (error) {
          console.log(error);
          return next(error);
      } else {
         data.password.save(function(error) {
            if (error) {
                console.log("error")
              }
                console.log("Usuario Creado con Exito");
                res.json(data);
                console.log(data);
                console.log("Contraseña actualizada!");
              });
            }
      },
      );
      });
// Delete Emprendedor
emprendedorRoute.route("/eliminar-emprendedor/:id").delete((req, res, next) => {
    EmprendedorModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
            msg: data,
            });
        }
    });
});
emprendedorRoute.route("/login").post(function(req, res) {
    EmprendedorModel.findOne(
      {
        email: req.body.email,
      },
      function(err, user) {
        if (err) throw err;
  
        if (!user) {
            console.log("Error, e-mail no registrado")
          res.status(401).send({
            success: false,
            msg: "Fallo la Autenticación. E-mail no Registrado."
            
          });
        } else {
          // check if password matches
          user.comparePassword(req.body.password, function(err, isMatch) {
            if (isMatch && !err) {
              let token = jwt.sign(user.toJSON(), settings.secret);
              res.json({ success: true, token: "JWT " + token, id: user._id });
            } 
            else {
                console.log("Error, contraseña erronea")
              res.status(401).send({
                success: false,
                msg: "Password Erroneo"
              });
            }
          });
        }
      }
    );
  });
  emprendedorRoute.route("/buscar-categoria/:categoria").get((req, res) => {
    EmprendedorModel.find({ emprendimientoCategoria: req.params.categoria}, (error, data, next) => {
        if (error) {
            console.log(error);
            return next(error);
        } else {
            res.json(data);
        }
    });
  });

  getToken = function(headers) {
    if (headers && headers.authorization) {
      var parted = headers.authorization.split(" ");
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    } else {
      return null;
    }
  };
  
module.exports = emprendedorRoute;
