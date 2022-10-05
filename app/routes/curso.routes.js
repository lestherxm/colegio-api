module.exports = app => {
    const cursos = require("../controllers/curso.controller.js");

    var router = require("express").Router();

    // Create a new @Curso
    router.post("/", cursos.create);

    // Retrieve all @Cursos
    router.get("/", cursos.findAll);

    // Retrieve a single @Curso with its ID
    router.get("/:id", cursos.findOne);

    // Update a @Curso with its ID
    router.put("/:id", cursos.update);

    // Delete a @Curso with its ID
    router.delete("/:id", cursos.delete);

    app.use("/api/curso", router);
};