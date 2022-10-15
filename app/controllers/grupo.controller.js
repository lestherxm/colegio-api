const db = require("../models");
const Grupo = db.grupos;
const Op = db.Sequelize.Op;

// Crate and Save a new @Grupo
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre) {
        res.status(400).send({
            message: "Es obligatorio especificar el nombre del @Grupo"
        });
        return; //impide que el resto del codigo del metodo .create() se siga ejecutando.
    }

    // Creando @Grupo
    const grupo = {
        ig_grupo: req.body.ig_grupo,
        nombre: req.body.nombre
    };

    // Guardando @Grupo
    Grupo.create(grupo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the @Grupo"
            });
        });
};

// Mostrando los @Grupos en la basededatos.
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Grupo.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving the @Grupos."
            });
        });
};

// Mostrar un @Grupo en especifico
exports.findOne = (req, res) => {
    const id_grupo = req.params.id_grupo;

    Grado.findByPk(id_grupo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error retrieving @Grupo with id_grupo=" + id_grupo
            });
        });
};

// actualizar
exports.update = (req, res) => {
    const id_grupo = req.params.id_grupo;

    Grupo.update(req.body, {
        where: { id_grupo: id_grupo }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "@Grado was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update @Grado with id_grupo=${id_grupo}. Maybe @Grupo was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error updating @Grado with id_grupo=" + id_grupo
            });
        });
};

// Borrar
exports.delete = (req, res) => {
    const id_grupo = req.params.id_grupo;

    Grupo.destroy({
        where: { id_grupo: id_grupo }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "@Grupo was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete @Grupo with id_grupo=${id_grupo}. Maybe @Grupo was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Couldn't delete @Grupo with id_grupo=" + id_grupo
            });
        });
};