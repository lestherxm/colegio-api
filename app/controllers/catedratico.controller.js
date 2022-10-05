const db = require("../models");
const Catedratico = db.catedraticos;
const Op = db.Sequelize.Op;

// Creando y guardando un catedratico
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Nombre) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Creando un Catedratico
  const catedratico = {
    Nombre: req.body.Nombre,
    Apellido: req.body.Apellido,
    Direccion: req.body.Direccion,
    Correo: req.body.Correo,
    Telefono: req.body.Telefono
  };

  // Guardando el catedratico en la base de datos
  Catedratico.create(catedratico)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating teacher."
      });
    });
};

// Mostrando todos los catedraticos de la BD.
exports.findAll = (req, res) => {
  const Nombre = req.query.Nombre;
  var condition = Nombre ? { Nombre: { [Op.iLike]: `%${Nombre}%` } } : null;

  Catedratico.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving teachers."
      });
    });
};

// Find a single Catedratico with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Catedratico.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Teacher with id=" + id
      });
    });
};

// Update a Teacher by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Catedratico.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Teacher was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Teacher with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Teacher with id=" + id
      });
    });
};

// Delete a Teacher with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Catedratico.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Teacher was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Teacher with id=${id}. Maybe Teacher was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Teacher with id=" + id
      });
    });
};

// Delete all Teachers from the database.
exports.deleteAll = (req, res) => {
  Catedratico.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Teachers were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all teachers."
      });
    });
};

// find all status Tutorial
exports.findAllStatus = (req, res) => {
  Catedratico.findAll({ where: { status: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving teachers."
      });
    });
};