const express = require("express");
const emprendedorRoute = express.Router();
// Emprendedor model
let EmprendedorModel = require("../models/Emprendedor");
emprendedorRoute.route("/").get((req, res) => {
    EmprendedorModel.find((error, data, next) => {
        if (error) {
            return next(error);
        } else {
            console.log(error);
            res.json(data);
        }
    });
});
emprendedorRoute.route("/registro-emprendedor").post((req, res, next) => {
    EmprendedorModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
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
module.exports = emprendedorRoute;
