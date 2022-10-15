module.exports = app => {
    const anio = require("../controllers/anio.controller.js");
    
    var router = require("express").Router();
    
    // Create a new @Grado
    router.post("/", anio.create);
    
    // Retrieve all @Grados
    router.get("/", anio.findAll);
    
    // Retrieve a single @Grado with id
    router.get("/:id_anio", anio.findOne);
    
    // Update a @Grado with id
    router.put("/:id_anio", anio.update);
    
    // Delete a @Grado with id
    router.delete("/:id_anio", anio.delete);
    
    app.use("/anios", router);
};