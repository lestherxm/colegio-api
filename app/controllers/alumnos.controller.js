const db = require("../models");
const Alumnos = db.alumnos;
const Op = db.Sequelize.Op;

// Crate and save alumno xd
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Nombre) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Creando un alumno
  const alumno = {
    Nombres: req.body.Nombre,
    Apellidos: req.body.Apellido,
    Direccion: req.body.Direccion,
    Correo: req.body.Correo,
    Telefono: req.body.Telefono,
    Telefono_encargado: req.body.Telefono_encargado,
    Grado_que_cursa:req.body.Grado_que_cursa,
    Seccion:req.body.Seccion
  };

  // Guardando al alumno en la base de datos
  Alumnos.create(alumno)
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

// Mostrando a los alumnos en la basededatos.
exports.findAll = (req, res) => {
  const Nombre = req.query.Nombre;
  var condition = Nombre ? { Nombre: { [Op.iLike]: `%${Nombre}%` } } : null;

  Alumnos.findAll({ where: condition })
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

// 
exports.findOne = (req, res) => {
  const id = req.params.id;

  Alumnos.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Teacher with id=" + id
      });
    });
};

// 
exports.update = (req, res) => {
  const id = req.params.id;

  Alumnos.update(req.body, {
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

// Borrar
exports.delete = (req, res) => {
  const id = req.params.id;

  Alumnos.destroy({
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

// Borrar todos los alumnos.
exports.deleteAll = (req, res) => {
  Alumnos.destroy({
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
  Alumnos.findAll({ where: { status: true } })
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