module.exports = (sequelize, Sequelize) =>{
  const Usuarios = sequelize.define("Usuarios", {
    idUser: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'id_user'
    },
    nombresApellidosUser: {
      type: Sequelize.STRING(250),
      allowNull: false,
      field: 'nombresapellidos_user'
    },
    rolUser: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'rol_user'
    },
    mailUser: {
      type: Sequelize.STRING(100),
      allowNull: false,
      field: 'mail_user'
    },
    passwordUser: {
      type: Sequelize.STRING(20),
      allowNull: false,
      field: 'password_user'
    }
  });

  return Usuarios;
}