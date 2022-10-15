module.exports = (sequelize, Sequelize) => {
    const Anio = sequelize.define("anios", {
        id_anio: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        
        anio: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        }
    });

    return Anio;
};
