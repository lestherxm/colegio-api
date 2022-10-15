const db = require("../models");
const Anio = db.anios;
const Op = db.Sequelize.Op;

// Crate and Save a new @Anio
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre) {
        res.status(400).send({
            message: "Es obligatorio especificar el anio como tal para registrar un @Anio"
        });
        return;
    }

    // Creando @Anio
    const anio = {
        nombre: req.body.nombre
    };

    // Guardando @Anio
    Anio.create(grado)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the @Anio"
            });
        });
};

// Mostrando los @Anios registrados en la DB.
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Anio.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving the @Anios."
            });
        });
};

// Mostrar un @Anio en especifico
exports.findOne = (req, res) => {
    const id_anio = req.params.id_anio;

    Anio.findByPk(id_anio)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || `Error retrieving @Grado with id_anio= ${id_anio}`
            });
        });
};

// actualizar
exports.update = (req, res) => {
    const id_anio = req.params.id_anio;

    Anio.update(req.body, {
        where: { id_anio: id_anio }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "@Anio was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update @Anio with id=${id_anio}. Maybe @Anio was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || `Error updating @Grado with id= ${id_anio}`
            });
        });
};

// Borrar
exports.delete = (req, res) => {
    const id_anio = req.params.id_anio;

    Anio.destroy({
        where: { id_anio: id_anio }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "@Anio was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete @Anio with id_anio=${id_anio}. Maybe @Anio was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Couldn't delete @Anio with id_anio= ${id_anio}`
            });
        });
};