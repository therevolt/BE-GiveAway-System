module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    nama: {
      type: Sequelize.STRING,
    },
    umur: {
      type: Sequelize.INTEGER,
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: {
          msg: "Email must in format foo@bar.com",
        },
      },
    },
    password: {
      type: Sequelize.STRING,
    },
    aktif: {
      type: Sequelize.BOOLEAN,
    },
  });

  return User;
};
