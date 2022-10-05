module.exports = (sequelize, Sequelize) => {
    const Alumnos = sequelize.define("alumnos", {
        
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
        type: Sequelize.INT
      },
      Telefono_Encargado: {
        type: Sequelize.INT
      },
      Grado_que_cursa: {
        type: Sequelize.STRING
      },
      Seccion: {
        type: Sequelize.STRING
      }
    });
  
    return Alumnos;
  };