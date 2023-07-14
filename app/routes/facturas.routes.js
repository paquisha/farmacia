module.exports = app => {
  const Facturas = require("../controllers/facturas.controller.js");

  var router = require("express").Router();

  // Create a new Factura
  router.post("/", Facturas.create);

  // Retrieve all Factura
  router.get("/", Facturas.findAll);

  // Retrieve a single Factura with id
  router.get("/:id", Facturas.findOne);

  // Update a Factura with id
  router.put("/:id", Facturas.update);

  // Delete a Factura with id
  router.delete("/:id", Facturas.delete);

  // Delete all Factura
  router.delete("/", Facturas.deleteAll);

  app.use("/api/Facturas", router);
};