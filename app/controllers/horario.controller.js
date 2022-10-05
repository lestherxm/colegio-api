const db = require("../models");
const Horario = db.horarios;
const Op = db.Sequelize.Op;

// Creando y guardando un horario
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Hora_Ini) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Creando un Horario
  const horario = {
    Hora_Ini: req.body.Hora_Ini,
    Hora_Fin: req.body.Hora_Fin,
  };

  // Guardando el horario en la base de datos
  Horario.create(horario)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating horario."
      });
    });
};

// Mostrando todos los horarios de la BD.
exports.findAll = (req, res) => {
  const Hora_Ini = req.query.Hora_Ini;
  var condition = Hora_Ini ? { Hora_Ini: { [Op.iLike]: `%${Hora_Ini}%` } } : null;

  Horario.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving horarios."
      });
    });
};

// Find a single horario with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Horario.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Horario with id=" + id
      });
    });
};

// Update a Horario by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Horario.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Horario was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Horario with id=${id}. Maybe Horario was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Horario with id=" + id
      });
    });
};

// Delete a Horario with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Horario.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Horario was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Horario with id=${id}. Maybe Horario was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Horario with id=" + id
      });
    });
};

// Delete all Horarios from the database.
exports.deleteAll = (req, res) => {
  Horario.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Horarios were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all horarios."
      });
    });
};

// find all status Tutorial
exports.findAllStatus = (req, res) => {
  Horario.findAll({ where: { status: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving horarios."
      });
    });
};