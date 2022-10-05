const db = require("../models");
const Curso = db.cursos; //comes from ../models/index.js
const Op = db.Sequelize.Op;

// Creando y guardando un @curso
exports.create = (req, res) => {
    // Validate request
    if ((!req.body.nombre) && (!req.body.descripcion)) {
        res.status(400).send({
            message: "nombre y descripcion del @Curso NO especificado"
        });
        return;
    }

    // Creando un @curso
    const curso = {
        Nombre: req.body.Nombre,
        Descripcion: req.body.Descripcion
    };

    // Guardando el @curso en la db
    Curso.create(curso)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "No se pudo registrar el @curso"
            });
        });
};

// Mostrando todos los @cursos de la BD.
exports.findAll = (req, res) => {
    const Nombre = req.query.Nombre;
    var condition = Nombre ? { Nombre: { [Op.iLike]: `%${Nombre}%` } } : null;

    Curso.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving @Cursos"
            });
        });
};

// Find a single @Curso with its ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    Curso.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving @Curso with id=" + id
            });
        });
};

// Update a @Curso by its ID in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Curso.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "@Curso was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update @curso with id=${id}. Maybe @curso was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating @Curso with id=" + id
            });
        });
};

// Delete a @Curso with the specified ID in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Curso.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "@Curso was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete @Curso with id=${id}. Maybe @Curso was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete @Curso with id=" + id
            });
        });
};

