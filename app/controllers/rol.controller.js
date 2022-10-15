const db = require("../models");
const Rol = db.roles; //comes from ../models/index.js
const Op = db.Sequelize.Op;

// Creando y guardando un @rol
exports.create = (req, res) => {
    // Validate request
    if ((!req.body.nombre) && (!req.body.descripcion)) {
        res.status(400).send({
            message: "nombre y descripcion del @Rol NO especificado"
        });
        return;
    }

    // Creando un @rol
    const rol = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
    };

    // Guardando el @rol en la db
    Rol.create(rol)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "No se pudo registrar el @Rol"
            });
        });
};

// Mostrando todos los @Roles de la BD.
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Rol.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving @Roles"
            });
        });
};

// Find a single @Rol with its ID
exports.findOne = (req, res) => {
    const id_rol = req.params.id_rol;

    Rol.findByPk(id_rol)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: `Error retrieving @Rol with id_rol= ${id_rol}`
            });
        });
};

// Update a @Rol by its ID in the request
exports.update = (req, res) => {
    const id_rol = req.params.id_rol;

    Rol.update(req.body, {
        where: { id_rol: id_rol }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "@Rol was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update @rol with id_rol=${id_rol}. Maybe @rol was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || `Error updating @Rol with id_rol = ${id_rol}`
            });
        });
};

// Delete a @Rol with the specified ID in the request
exports.delete = (req, res) => {
    const id_rol = req.params.id_rol;

    Rol.destroy({
        where: { id_rol: id_rol }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "@Rol was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete @Rol with id_rol=${id_rol}. Maybe @Rol was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete @Rol with id_rol= ${id_rol}`
            });
        });
};
