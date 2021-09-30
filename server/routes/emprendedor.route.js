const express = require("express");
const emprendedorRoute = express.Router();
// Emprendedor model
let EmprendedorModel = require("../models/Emprendedor");
emprendedorRoute.route("/").get((req, res) => {
    EmprendedorModel.find((error, data1, next) => {
        if (error) {
            return next(error);
        } else {
            console.log(error);
            res.json(data1);
        }
    });
});
emprendedorRoute.route("/11").post((req, res, next) => {
    EmprendedorModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

emprendedorRoute.route("/registro-emprendedor").post(function(req, res, next) {
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
            return res.json({ success: false, msg: "Username already exists." });
          }
          res.json({ success: true, msg: "Successful created new user." });
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
emprendedorRoute.route("/buscar-ultimo").get((res) => {
    EmprendedorModel.find({}, (error, data) => {
        if (error) {
            console.log(error);
            return next(error);
        } else {
            res.json(data);
            console.log(data.name);
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
        email: req.body.email
      },
      function(err, user) {
        if (err) throw err;
  
        if (!user) {
            console.log("Error, no registrado")
          res.status(401).send({
            success: false,
            msg: "Fallo la Autenticación. E-mail no Registrado."
            
          });
        } else {
          // check if password matches
          user.comparePassword(req.body.password, function(err, isMatch) {
            if (isMatch && !err) {
              console.log("Correcto. Ese es el password");
              res.json(req.body.password)
            } else {
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



module.exports = emprendedorRoute;
