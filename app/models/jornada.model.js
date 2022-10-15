module.exports = (sequelize, Sequelize) => {
    const Jornada = sequelize.define("jornadas", {
        id_jornada: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        }
    });

    return Jornada;
};
