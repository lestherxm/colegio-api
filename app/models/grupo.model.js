module.exports = (sequelize, Sequelize) => {
    const Grupo = sequelize.define("grupos", {
        id_grupo: {
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

    return Grupo;
};
