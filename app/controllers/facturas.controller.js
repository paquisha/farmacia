const db = require("../models");
const Facturas = db.Facturas;
const Op = db.Sequelize.Op;

// Create and Save a new Factura
exports.create = (req, res) => {
  // Validate request
  if (!req.body.identificaCli) {
    res.status(400).send({
      message: "Identificacion can not be empty!"
    });
    return;
  }

  // Create a Factura
  const factura = {
    idUser: !req.body.idUser ? req.body.idUser : null,
    idCliente: req.body.idCliente,
    idProd: req.body.idProd,
    cantidadProdFact: req.body.cantidadProdFact,
    numFact: req.body.numFact,
    descripcionProdfact: req.body.descripcionProdfact,
    precioUnitFact: req.body.precioUnitFact,
    precioFact: req.body.precioFact,
    subTotalFact: req.body.subTotalFact,
    subTotal12Fact: req.body.subTotal12Fact,
    descuentoFact: req.body.descuentoFact,
    ivaFact: req.body.ivaFact,
    totalFact: req.biy.totalFact
  };

  // Save Factura in the database
  Facturas.create(factura)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating Factura."
      });
    });
};

// Retrieve all Factura from the database.
exports.findAll = (req, res) => {
  const numFact = req.query.numFact;
  var condition = numFact ? { numFact: { [Op.iLike]: `%${numFact}%` } } : null;

  Facturas.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Factura."
      });
    });
};

// Find a single Factura with an id
exports.findOne = (req, res) => {
  const numFact = req.params.numFact;

  Facturas.findByPk(numFact)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find factura with NUmero=${numFact}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Factura with numFact=" + numFact
      });
    });
};

// Update a Factura by the id in the request
exports.update = (req, res) => {
  const idFactura = req.params.idFact;

  Facturas.update(req.body, {
    where: { idFactura: idFactura }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Factura was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Factura with id=${idFactura}. Maybe Factura was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Client with id=" + idFactura
      });
    });
};

// Delete a Factura with the specified id in the request
exports.delete = (req, res) => {
  const idFact = req.params.idFact;

  Facturas.destroy({
    where: { idFact: idFact }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Factura was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Factura with id=${idFact}. Maybe Factura was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Factura with id=" + idFact
      });
    });
};

// Delete all Factura from the database.
exports.deleteAll = (req, res) => {
  Facturas.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Facturas were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Facturas."
      });
    });
};