module.exports = (sequelize, Sequelize) => {
  const Catedratico = sequelize.define("catedratico", {

    Nombres: {
      type: Sequelize.STRING
    },
    Apellidos: {
      type: Sequelize.STRING
    },
    Direccion: {
      type: Sequelize.STRING
    },
    Correo: {
      type: Sequelize.STRING
    },
    Telefono: {
      type: Sequelize.STRING
    }
  });

  return Catedratico;
};