const express = require("express");
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

emprendedorRoute.route("/buscar-emprendedor/:id").get((req, res) => {
    EmprendedorModel.findById(req.params.id, (error, data, next) => {
        if (error) {
            console.log(error);
            return next(error);
        } else {
            res.json(data);
        }
    });
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
              res.json(user);
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
  emprendedorRoute.route("/buscar-categoria/Comida").get((req, res) => {
    EmprendedorModel.find({ emprendimientoCategoria: req.body.categoria}, (error, data, next) => {
        if (error) {
            console.log(error);
            return next(error);
        } else {
            res.json(data);
        }
    });
  });


module.exports = emprendedorRoute;
