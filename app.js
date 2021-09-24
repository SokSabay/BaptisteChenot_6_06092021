require("dotenv").config();
const host = process.env.DB_HOST;
const username = process.env.DB_USER;
const password = process.env.DB_PASS;

const express = require("express");
const bodyParser = require("body-parser");

const helmet = require("helmet");
const mongoose = require("mongoose");
const sauceRoutes = require("./routes/sauce");
const userRoutes = require("./routes/user");
const path = require("path");

const app = express();
app.use(helmet());

mongoose
  .connect("mongodb+srv://" + username + ":" + password + "@" + host, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/sauces", sauceRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
