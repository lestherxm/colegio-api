module.exports = (sequelize, Sequelize) => {
    const Seccion = sequelize.define("secciones", {
        id_seccion: {
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

    return Seccion;
};
