module.exports = app => {
  const Clientes = require("../controllers/clientes.controller.js");

  var router = require("express").Router();

  // Create a new Cliente
  router.post("/", Clientes.create);

  // Retrieve all Tutorials
  router.get("/", Clientes.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", Clientes.findOne);

  // Update a Tutorial with id
  router.put("/:id", Clientes.update);

  // Delete a Tutorial with id
  router.delete("/:id", Clientes.delete);

  // Delete all Tutorials
  router.delete("/", Clientes.deleteAll);

  app.use("/api/clientes", router);
};
