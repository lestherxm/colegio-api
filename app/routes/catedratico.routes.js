module.exports = app => {
    const catedraticos = require("../controllers/catedratico.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Teacher
    router.post("/", catedraticos.create);
  
    // Retrieve all Teachers
    router.get("/", catedraticos.findAll);
  
    // Retrieve all published Teachers
    router.get("/status/", catedraticos.findAllStatus);
  
    // Retrieve a single Teacher with id
    router.get("/:id", catedraticos.findOne);
  
    // Update a Teacher with id
    router.put("/:id", catedraticos.update);
  
    // Delete a Teacher with id
    router.delete("/:id", catedraticos.delete);
  
    // Delete all Teachers
    router.delete("/", catedraticos.deleteAll);
  
    app.use("/api/catedratico", router);
  };