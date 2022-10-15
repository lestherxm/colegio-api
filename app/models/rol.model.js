module.exports = (sequelize, Sequelize) => {
    const Rol = sequelize.define("roles", {
        id_rol: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },

        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },

        descripcion: {
            type: Sequelize.TEXT,
            allowNull: false,
            unique: true
        },
    });

    return Rol;
};