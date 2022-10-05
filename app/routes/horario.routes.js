module.exports = app => {
    const horarios = require("../controllers/horario.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Horario
    router.post("/", horarios.create);
  
    // Retrieve all Horarios
    router.get("/", horarios.findAll);
  
    // Retrieve all published Horarios
    router.get("/status/", horarios.findAllStatus);
  
    // Retrieve a single Horarios with id
    router.get("/:id", horarios.findOne);
  
    // Update a Horarios with id
    router.put("/:id", horarios.update);
  
    // Delete a Horarios with id
    router.delete("/:id", horarios.delete);
  
    // Delete all Horarios
    router.delete("/", horarios.deleteAll);
  
    app.use("/api/horario", router);
  };