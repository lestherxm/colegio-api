module.exports = (sequelize, Sequelize) => {
    const Curso = sequelize.define("curso", {
        
        nombre: {
            type: Sequelize.STRING
        },

        descripcion: {
            type: Sequelize.TEXT
        },

    });

    return Curso;
};