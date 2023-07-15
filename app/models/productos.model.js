module.exports = (sequelize, Sequelize) =>{
  const Productos = sequelize.define("Productos", {
    idProd: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'id_prod'
    },
    idUser: {
      type: Sequelize.INTEGER,
      field: 'id_user'
    },
    cantidadprod: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'cantidad_prod'
    },
    codBarrasProd: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'codbarras_prod'
    },
    descripcionProd: {
      type: Sequelize.STRING(450),
      allowNull: false,
      field: 'descripcion_prod'
    },
    compuestosProd: {
      type: Sequelize.STRING(450),
      allowNull: false,
      field: 'compuestos_prod'
    },
    precioUnitProd: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      field: 'preciounit_prod'
    },
    precioProd: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      field: 'precio_prod'
    }
  });

  return Productos;
}