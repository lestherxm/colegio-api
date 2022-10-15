module.exports = (sequelize, Sequelize) => {
    const Persona = sequelize.define("personas", {
        id_persona: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },

        cui: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },

        correo: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },

        nombres: {
            type: Sequelize.STRING,
            allowNull: false
        },

        apellidos: {
            type: Sequelize.STRING,
            allowNull: false
        },

        nombre_completo: {
            type: Sequelize.STRING,
            allowNull: false
        },

        biografia: {
            type: Sequelize.TEXT,
            allowNull: true
        },

        celular: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },

        telefono: {
            type: Sequelize.STRING,
            allowNull: true
        },

        direccion: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        
        active: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    });
    return Persona;
};
