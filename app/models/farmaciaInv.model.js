module.exports = (sequelize, Sequelize) =>{
  const FacturasInv = sequelize.define("FacturasInv", {
    idInv: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'id_inv'
    },
    idUser: {
      type: Sequelize.INTEGER,
      field: 'id_user'
    },
    idProd: {
      type: Sequelize.INTEGER,
      field: 'id_prod'
    },
    cantidadInv: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'cantidadprod_inv'
    },
    entradaInv: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'entrada_inv'
    },
    salidaInv: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'salida_inv'
    },
    fechaInInv:{
      type: Sequelize.DATE,
      allowNull: false,
      field: 'fechain_inv'
    },
    fechaOutInv:{
      type: Sequelize.DATE,
      allowNull: false,
      field: 'fechaout_inv'
    }
  });

  return FacturasInv;
}