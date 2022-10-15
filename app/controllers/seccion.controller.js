const db = require("../models");
const Seccion = db.secciones;
const Op = db.Sequelize.Op;

// Crate and Save a new @Seccion
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre) {
        res.status(400).send({
            message: "Es obligatorio especificar el nombre de la @Seccion"
        });
        return;
    }

    // Creando @Seccion
    const seccion = {
        id_seccion: req.body.id_seccion,
        nombre: req.body.nombre
    };

    // Guardando @Seccion
    Seccion.create(seccion)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "el nombre de la @Seccion debe ser unico."
            });
        });
};

// Mostrando los @Grados en la basededatos.
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Seccion.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving the @Secciones."
            });
        });
};

// Mostrar una @Seccion en especifico
exports.findOne = (req, res) => {
    const id_seccion = req.params.id_seccion;

    Seccion.findByPk(id_seccion)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || `Error retrieving @Seccion with id_seccion= ${id_seccion}`
            });
        });
};

// actualizar
exports.update = (req, res) => {
    const id_seccion = req.params.id_seccion;

    Seccion.update(req.body, {
        where: { id_seccion: id_seccion }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "@Seccion was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update @Seccion with id_seccion=${id_seccion}. Maybe @Seccion was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || `Error updating @Seccion with id= ${id_seccion}`
            });
        });
};

// Borrar
exports.delete = (req, res) => {
    const id_seccion = req.params.id_seccion;

    Seccion.destroy({
        where: { id_seccion: id_seccion }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "@Seccion was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete @Seccion with id_seccion=${id_seccion}. Maybe @Seccion was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || `Couldn't delete @Seccion with id= ${id_seccion}`
            });
        });
};