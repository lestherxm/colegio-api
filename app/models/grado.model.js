module.exports = (sequelize, Sequelize) => {
    const Grado = sequelize.define("grados", {
        id_grado: {
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

    return Grado;
};
