module.exports = app => {
    const personas = require("../controllers/persona.controller.js");
    let router = require("express").Router();
    // Create a new @Persona
    router.post("/", personas.create);
    // Retrieve all @Personas
    router.get("/", personas.findAll);
    // Retrieve all activated @Personas
    router.get("/activated", personas.findAllActivated);
    // Retrieve all deactivated @Personas
    router.get("/deactivated", personas.findAllDeactivated);
    // Retrieve a single @Persona with cui
    router.get("/:cui", personas.findOneByCui);
    // Update a @Persona with cui
    router.put("/:cui", personas.updateByCui);
    // Delete a @Persona with cui
    router.delete("/:cui", personas.deleteByCui);
    // Main API endpoint
    app.use("/colegio/personas", router);
};
