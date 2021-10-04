// Middleware de sécurité
// Bloque l'utilisateur si il trop de tentative de connexion
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 3,
  message: "Trop de tentatives de connexion. Compte bloqué pour 5 minutes",
});

module.exports = { limiter };
