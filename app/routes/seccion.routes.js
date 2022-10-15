module.exports = app => {
    const seccion = require("../controllers/seccion.controller.js");
    
    var router = require("express").Router();
    
    // Create a new @Seccion
    router.post("/", seccion.create);
    
    // Retrieve all @Seccion
    router.get("/", seccion.findAll);
    
    // Retrieve a single @Seccion with id
    router.get("/:id_seccion", seccion.findOne);
    
    // Update a @Seccion with id
    router.put("/:id_seccion", seccion.update);
    
    // Delete a @Seccion with id
    router.delete("/:id_seccion", seccion.delete);
    
    app.use("/secciones", router);
};
