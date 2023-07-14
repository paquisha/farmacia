module.exports = (sequelize, Sequelize) =>{
  const Facturas = sequelize.define("Facturas", {
    idFact: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'id_fact'
    },
    idUser: {
      type: Sequelize.INTEGER,
      field: 'id_user'
    },
    idCliente: {
      type: Sequelize.INTEGER,
      field: 'id_cliente'
    },
    idProd: {
      type: Sequelize.INTEGER,
      field: 'id_prod'
    },
    cantidadProdFact: {
      type: Sequelize.INTEGER,
      field: 'cantidadprod_fact'
    },
    numFact: {
      type: Sequelize.STRING(100),
      allowNull: false,
      field: 'num_fact'
    },
    descripcionProdFact: {
      type: Sequelize.STRING(450),
      allowNull: false,
      field: 'descripcionprod_fact'
    },
    precioUnitFact: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      field: 'preciounit_fact'
    },
    precioFact: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      field: 'precio_fact'
    },
    subtotalFact: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      field: 'subtotal_fact'
    },
    subtotal12Fact: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      field: 'subtotal12_fact'
    },
    descuentoFact: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      field: 'descuento_fact'
    },
    ivaFact: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      field: 'iva_fact'
    },
    totalFact: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      field: 'total_fact'
    }
  });

  return Facturas;
}