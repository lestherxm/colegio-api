module.exports = app => {
    const grupo = require("../controllers/grupo.controller.js");
    
    var router = require("express").Router();
    
    // Create a new @Grupo
    router.post("/", grupo.create);
    
    // Retrieve all @Grupo
    router.get("/", grupo.findAll);
    
    // Retrieve a single @Grupo with id
    router.get("/:id", grupo.findOne);
    
    // Update a @Grupo with id
    router.put("/:id", grupo.update);
    
    // Delete a @Grupo with id
    router.delete("/:id", grupo.delete);
    
    app.use("/grupos", router);
};
