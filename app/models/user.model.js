module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    nama: {
      type: Sequelize.STRING,
    },
    umur: {
      type: Sequelize.NUMBER,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  });

  return User;
};
