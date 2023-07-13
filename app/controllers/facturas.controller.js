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

  // Create a client
  const cliente = {
    idUser: !req.body.idUser ? req.body.idUser : null,
    identificaCli: req.body.identificaCli,
    nombresapellidosCli: req.body.nombresapellidosCli,
    direccionCli: req.body.direccionCli,
    telefCli: req.body.telefCli
  };

  // Save Client in the database
  Clientes.create(cliente)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating Client."
      });
    });
};

// Retrieve all Client from the database.
exports.findAll = (req, res) => {
  const identificaCli = req.query.identificaCli;
  var condition = identificaCli ? { identificaCli: { [Op.iLike]: `%${identificaCli}%` } } : null;

  Clientes.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Client."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const identificaCli = req.params.identificaCli;

  Clientes.findByPk(identificaCli)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Client with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Client with id=" + id
      });
    });
};

// Update a Client by the id in the request
exports.update = (req, res) => {
  const idCliente = req.params.idCliente;

  Clientes.update(req.body, {
    where: { idCliente: idCliente }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Client was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Client with id=${idCliente}. Maybe Client was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Client with id=" + idCliente
      });
    });
};

// Delete a Client with the specified id in the request
exports.delete = (req, res) => {
  const idCliente = req.params.idCliente;

  Clientes.destroy({
    where: { idCliente: idCliente }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Client was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Client with id=${idCliente}. Maybe Client was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Client with id=" + idCliente
      });
    });
};

// Delete all Client from the database.
exports.deleteAll = (req, res) => {
  Clientes.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Client were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Client."
      });
    });
};