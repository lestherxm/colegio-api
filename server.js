const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081" /* why 8081?*/
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

/* db is a variable exporten in models/index.js*/
const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db yeah buddy!.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message + "what the hell is going on?");
  });

// drop the table if it already exists
//db.sequelize.sync({ force: true }).then(() => {
// console.log("Drop and re-sync db.");
//});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "<<CEBE (Colegio el Buen Estudiante) API>>" });
});

/* Pon las rutas que vas creando aca*/
require('./app/routes/curso.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
