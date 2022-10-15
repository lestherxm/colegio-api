const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081" 
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models"); // "db" is a variable exported in models/index.js

db.sequelize.sync()
  .then(() => {
    console.log("Synced DB, -- yeah buddy! light weight baby! --");
  })
  .catch((err) => {
    console.log("Failed to sync db -- " + err.message + " -- what the hell is going on?");
  });

// drop the table if it already exists
//db.sequelize.sync({ force: true }).then(() => {
// console.log("Drop and re-sync db.");
//});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "<<CEBE (Colegio el Buen Estudiante) API>>" });
});

/**
 * TODO: Acá se deben poner los enlaces a las rutas/enpoints
 */
require('./app/routes/persona.routes.js')(app);
require('./app/routes/grado.routes.js')(app);
require('./app/routes/grupo.routes.js')(app);
require('./app/routes/rol.routes.js')(app);
require('./app/routes/seccion.routes.js')(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`<<CEBE>> Server is running on port ${PORT}.`);
});
