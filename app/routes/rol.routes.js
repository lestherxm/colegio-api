module.exports = app => {
    const rol = require("../controllers/rol.controller.js");
    
    var router = require("express").Router();
    
    // Create a new @Rol
    router.post("/", rol.create);
    
    // Retrieve all @Roles
    router.get("/", rol.findAll);
    
    // Retrieve a single @Rol with its ID
    router.get("/:id", rol.findOne);
    
    // Update a @Rol with its ID
    router.put("/:id", rol.update);
    
    // Delete a @Rol with its ID
    router.delete("/:id", rol.delete);
    
    app.use("/roles", router);
};