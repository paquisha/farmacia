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
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      field: 'preciounit_fact'
    },
    precioFact: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      field: 'precio_fact'
    },
    subtotalFact: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      field: 'subtotal_fact'
    },
    subtotal12Fact: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      field: 'subtotal12_fact'
    },
    descuentoFact: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      field: 'descuento_fact'
    },
    ivaFact: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      field: 'iva_fact'
    },
    totalFact: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      field: 'total_fact'
    }
  });

  return Facturas;
}