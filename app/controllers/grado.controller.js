const db = require("../models");
const Grado = db.grados;
const Op = db.Sequelize.Op;

// Crate and Save a new @Grado
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nombre) {
    res.status(400).send({
      message: "Es obligatorio especificar el nombre del @Grado"
    });
    return;
  }

  // Creando @Grado
  const grado = {
    nombre: req.body.nombre
  };

  // Guardando @Grado
  Grado.create(grado)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the @Grado"
      });
    });
};

// Mostrando los @Grados en la basededatos.
exports.findAll = (req, res) => {
  const nombre = req.query.nombre;
  var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

  Grado.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the @Grados."
      });
    });
};

// Mostrar un @Grado en especifico
exports.findOne = (req, res) => {
  const id_grado = req.params.id_grado;

  Grado.findByPk(id_grado)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error retrieving @Grado with id_grado=" + id_grado
      });
    });
};

// actualizar
exports.update = (req, res) => {
  const id_grado = req.params.id_grado;

  Grado.update(req.body, {
    where: { id_grado: id_grado }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "@Grado was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update @Grado with id=${id_grado}. Maybe @Grado was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error updating @Grado with id=" + id_grado
      });
    });
};

// Borrar
exports.delete = (req, res) => {
  const id_grado = req.params.id_grado;

  Grado.destroy({
    where: { id_grado: id_grado }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "@Grado was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete @Grado with id=${id_grado}. Maybe @Grado was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Couldn't delete @Grado with id=" + id_grado
      });
    });
};