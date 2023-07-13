module.exports = (sequelize, Sequelize) => {
  const Clientes = sequelize.define("Clientes", {
    idCliente: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'id_cliente'
    },
    idUser: {
      type: Sequelize.INTEGER,
      field: 'id_user'
    },
    identificaCli: {
      type: Sequelize.STRING(13),
      allowNull: false,
      field: 'identifica_cli'
    },
    nombresapellidosCli: {
      type: Sequelize.STRING(250),
      allowNull: false,
      field: 'nombresapellidos_cli'
    },
    direccionCli: {
      type: Sequelize.STRING(450),
      allowNull: false,
      field: 'direccion_cli'
    },
    telefCli: {
      type: Sequelize.STRING(450),
      allowNull: false,
      field: 'telefcli'
    }
  });

  return Clientes;
};