const db = require("../models");
const Persona = db.personas;
const Op = db.Sequelize.Op;

// Create and Save a new @Persona
exports.create = (req, res) => {
    // Validate request - campos que no permiten NULL
    // Al no estar presente el dato, es false, pero al negarlo se vuelve true, entonces entra al condicional y envia el mensaje.
    if (!req.body.cui && !req.body.correo && !req.body.nombres && !req.body.apellidos && !req.body.celular && !req.body.direccion) {
        res.status(400).send({
            message: "Es necesario especificar: cui, correo, nombres, apellidos, celular, direccion"
        });
        return;
    }
    // Create a @Persona
    const persona = {
        cui: req.body.cui,
        correo: req.body.correo,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        nombre_completo: `${req.body.nombres} ${req.body.apellidos}`,
        biografia: req.body.biografia,
        celular: req.body.celular,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        active: req.body.active
    };
    // Save @Persona in the database
    Persona.create(persona)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the @Persona."
            });
        });
};

// Retrieve all @Personas from the database. You can specify a nombre_completo, too, for search options.
exports.findAll = (req, res) => {
    const nombre_completo = req.query.nombre_completo;
    var condition = nombre_completo ? { nombre_completo: { [Op.iLike]: `%${nombre_completo}%` } } : null;
    Persona.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving @Personas"
            });
        });
};

// Find a single @Persona with a CUI
exports.findOneByCui = (req, res) => {
    const cui = req.params.cui;
    Persona.findOne({
        where: { cui: cui }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving @Persona with cui=" + cui
            });
        });
};

// Update a @Persona by the CUI in the request
exports.updateByCui = (req, res) => {
    const cui = req.params.cui;
    Persona.update(req.body, {
        where: { cui: cui }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "@Persona was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update @Persona with cui=${cui}. Maybe @Persona was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating @Persona with cui=" + cui
            });
        });
};

// Delete a @Persona with the specified CUI in the request
exports.deleteByCui = (req, res) => {
    const cui = req.params.cui;
    Persona.destroy({
        where: { cui: cui }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "@Persona was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete @Persona with cui=${cui}. Maybe @Persona was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete @Persona with cui=${cui}. Maybe @Persona it's part of other Table by FK propertie`
            });
        });
};

// find all activated @Personas
exports.findAllActivated = (req, res) => {
    Persona.findAll({
        where: { active: true }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving activated @Personas."
            });
        });
};

// find all deactivated @Personas
exports.findAllDeactivated = (req, res) => {
    Persona.findAll({ 
        where: { active: false } 
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving deactivated @Personas."
            });
        });
};


