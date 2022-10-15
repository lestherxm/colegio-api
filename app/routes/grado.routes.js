module.exports = app => {
    const grado = require("../controllers/grado.controller.js");
    
    var router = require("express").Router();
    
    // Create a new @Grado
    router.post("/", grado.create);
    
    // Retrieve all @Grados
    router.get("/", grado.findAll);
    
    // Retrieve a single @Grado with id
    router.get("/:id", grado.findOne);
    
    // Update a @Grado with id
    router.put("/:id", grado.update);
    
    // Delete a @Grado with id
    router.delete("/:id", grado.delete);
    
    app.use("/grados", router);
};