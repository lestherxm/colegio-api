module.exports = (sequelize, Sequelize) => {
    const Horario = sequelize.define("horario", {
        
      Hora_Ini: {
        type: Sequelize.STRING
      },
      Hora_Fin: {
        type: Sequelize.STRING
      }
    });
  
    return Horario;
  };