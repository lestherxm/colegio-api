module.exports = app => {
    const alumnos = require("../controllers/alumnos.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Teacher
    router.post("/", alumnos.create);
  
    // Retrieve all Teachers
    router.get("/", alumnos.findAll);
  
    // Retrieve all published Teachers
    router.get("/status/", alumnos.findAllStatus);
  
    // Retrieve a single Teacher with id
    router.get("/:id", alumnos.findOne);
  
    // Update a Teacher with id
    router.put("/:id", alumnos.update);
  
    // Delete a Teacher with id
    router.delete("/:id", alumnos.delete);
  
    // Delete all Teachers
    router.delete("/", alumnos.deleteAll);
  
    app.use("/api/alumnos", router);
  };